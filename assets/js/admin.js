/**
 * ============================================
 * ADMIN PANEL - JAVASCRIPT
 * ============================================
 */

'use strict';

// Configuration
const CONFIG = {
    username: 'admin',
    password: 'admin123',
    storageKey: 'portfolio_projects',
    authKey: 'portfolio_auth'
};

// State
let projects = [];
let editingProjectId = null;
let projectModal = null;

/**
 * Initialize the application
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap Modal
    const modalElement = document.getElementById('projectModal');
    if (modalElement) {
        projectModal = new bootstrap.Modal(modalElement);
    }
    
    // Check if already logged in
    checkAuth();
    
    // Initialize event listeners
    initializeEventListeners();
    
    // Load projects
    loadProjects();
});

/**
 * Check authentication status
 */
function checkAuth() {
    try {
        const isAuthenticated = sessionStorage.getItem(CONFIG.authKey);
        
        if (isAuthenticated === 'true') {
            showDashboard();
        } else {
            showLogin();
        }
    } catch (error) {
        console.warn('⚠️ sessionStorage inaccessible:', error.message);
        showLogin();
    }
}

/**
 * Show login section
 */
function showLogin() {
    document.getElementById('loginSection').classList.remove('d-none');
    document.getElementById('adminDashboard').classList.add('d-none');
}

/**
 * Show admin dashboard
 */
function showDashboard() {
    document.getElementById('loginSection').classList.add('d-none');
    document.getElementById('adminDashboard').classList.remove('d-none');
    updateStatistics();
    displayProjects();
}

/**
 * Initialize event listeners
 */
function initializeEventListeners() {
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    
    // Add project button
    const addProjectBtn = document.getElementById('addProjectBtn');
    if (addProjectBtn) {
        addProjectBtn.addEventListener('click', openAddProjectModal);
    }
    
    // Save project button
    const saveProjectBtn = document.getElementById('saveProjectBtn');
    if (saveProjectBtn) {
        saveProjectBtn.addEventListener('click', () => saveProject(true));
    }
    
    // Save and continue button
    const saveAndContinueBtn = document.getElementById('saveAndContinueBtn');
    if (saveAndContinueBtn) {
        saveAndContinueBtn.addEventListener('click', () => saveProject(false));
    }
    
    // Image file input
    const projectImageFile = document.getElementById('projectImageFile');
    if (projectImageFile) {
        projectImageFile.addEventListener('change', handleImageUpload);
    }
    
    // Image URL input
    const projectImage = document.getElementById('projectImage');
    if (projectImage) {
        projectImage.addEventListener('input', previewImageFromUrl);
    }
}

/**
 * Handle login
 */
function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === CONFIG.username && password === CONFIG.password) {
        try {
            sessionStorage.setItem(CONFIG.authKey, 'true');
            showNotification('✅ Connexion réussie !', 'success');
            showDashboard();
        } catch (error) {
            console.warn('⚠️ sessionStorage bloqué, connexion temporaire:', error.message);
            showNotification('⚠️ Connexion temporaire (stockage désactivé)', 'warning');
            showDashboard();
        }
    } else {
        showNotification('❌ Identifiants incorrects', 'error');
    }
}

/**
 * Handle logout
 */
function handleLogout() {
    try {
        sessionStorage.removeItem(CONFIG.authKey);
    } catch (error) {
        console.warn('⚠️ sessionStorage inaccessible lors de la déconnexion');
    }
    showNotification('✅ Déconnexion réussie', 'success');
    showLogin();
}

/**
 * Load projects from localStorage
 */
function loadProjects() {
    try {
        const storedProjects = localStorage.getItem(CONFIG.storageKey);
        if (storedProjects) {
            projects = JSON.parse(storedProjects);
        } else {
            // Add demo projects
            projects = [];
        }
    } catch (error) {
        console.warn('⚠️ localStorage inaccessible:', error.message);
        console.info('💡 Solution: Désactivez la prévention du tracking pour ce site ou utilisez un autre navigateur.');
        projects = [];
        showStorageError();
    }
    updateStatistics();
    displayProjects();
}

/**
 * Save projects to localStorage
 */
function saveProjectsToStorage() {
    try {
        localStorage.setItem(CONFIG.storageKey, JSON.stringify(projects));
        updateStatistics();
    } catch (error) {
        console.error('❌ Impossible de sauvegarder:', error.message);
        showNotification('⚠️ Erreur: Impossible de sauvegarder. Le stockage est bloqué par votre navigateur.', 'error');
        showStorageError();
    }
}

/**
 * Display projects in the grid
 */
function displayProjects() {
    const projectsList = document.getElementById('projectsList');
    if (!projectsList) return;
    
    if (projects.length === 0) {
        projectsList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-folder-open"></i>
                <h3>Aucun projet</h3>
                <p>Commencez par ajouter votre premier projet !</p>
                <button class="btn btn-primary" onclick="openAddProjectModal()">
                    <i class="fas fa-plus-circle me-2"></i>Ajouter un projet
                </button>
            </div>
        `;
        return;
    }
    
    projectsList.innerHTML = projects.map(project => `
        <div class="project-card">
            ${project.image ? `
                <img src="${project.image}" alt="${project.title}" class="project-image">
            ` : `
                <div class="project-image d-flex align-items-center justify-content-center bg-light">
                    <i class="fas fa-image fa-3x text-muted"></i>
                </div>
            `}
            <div class="project-body">
                <div class="project-status ${project.published ? 'published' : 'draft'}">
                    <i class="fas fa-${project.published ? 'check-circle' : 'clock'}"></i>
                    ${project.published ? 'Publié' : 'Brouillon'}
                </div>
                <span class="project-badge">${project.category}</span>
                <h5 class="project-title">${project.title}</h5>
                ${project.date ? `<p class="project-date"><i class="fas fa-calendar me-2"></i>${project.date}</p>` : ''}
                <p class="project-description">${project.description}</p>
                ${project.tags && project.tags.length > 0 ? `
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                ` : ''}
                <div class="project-actions">
                    <button class="btn btn-sm btn-primary" onclick="editProject('${project.id}')">
                        <i class="fas fa-edit me-1"></i>Modifier
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="deleteProject('${project.id}')">
                        <i class="fas fa-trash me-1"></i>Supprimer
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * Update statistics
 */
function updateStatistics() {
    const totalProjects = projects.length;
    const publishedProjects = projects.filter(p => p.published).length;
    const draftProjects = projects.filter(p => !p.published).length;
    const lastUpdate = projects.length > 0 ? 'Aujourd\'hui' : '-';
    
    document.getElementById('totalProjects').textContent = totalProjects;
    document.getElementById('publishedProjects').textContent = publishedProjects;
    document.getElementById('draftProjects').textContent = draftProjects;
    document.getElementById('lastUpdate').textContent = lastUpdate;
}

/**
 * Open add project modal
 */
function openAddProjectModal() {
    editingProjectId = null;
    document.getElementById('modalTitle').innerHTML = '<i class="fas fa-plus-circle me-2"></i>Ajouter un projet';
    document.getElementById('projectForm').reset();
    document.getElementById('projectId').value = '';
    document.getElementById('imagePreview').classList.add('d-none');
    
    // Show "Save and continue" button only when adding new project
    document.getElementById('saveAndContinueBtn').style.display = 'inline-block';
    document.getElementById('saveProjectBtn').innerHTML = '<i class="fas fa-save me-2"></i>Enregistrer et fermer';
    
    projectModal.show();
}

/**
 * Edit project
 */
window.editProject = function(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    editingProjectId = projectId;
    document.getElementById('modalTitle').innerHTML = '<i class="fas fa-edit me-2"></i>Modifier le projet';
    document.getElementById('projectId').value = project.id;
    document.getElementById('projectTitle').value = project.title;
    document.getElementById('projectDate').value = project.date || '';
    document.getElementById('projectCategory').value = project.category;
    document.getElementById('projectDescription').value = project.description;
    document.getElementById('projectImage').value = project.image || '';
    document.getElementById('projectLink').value = project.link || '';
    document.getElementById('projectTags').value = project.tags ? project.tags.join(', ') : '';
    document.getElementById('projectPublished').checked = project.published;
    
    if (project.image) {
        document.getElementById('imagePreview').classList.remove('d-none');
        document.getElementById('previewImg').src = project.image;
    }
    
    // Hide "Save and continue" button when editing
    document.getElementById('saveAndContinueBtn').style.display = 'none';
    document.getElementById('saveProjectBtn').innerHTML = '<i class="fas fa-save me-2"></i>Enregistrer';
    
    projectModal.show();
};

/**
 * Delete project
 */
window.deleteProject = function(projectId) {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) {
        return;
    }
    
    projects = projects.filter(p => p.id !== projectId);
    saveProjectsToStorage();
    displayProjects();
    showNotification('Projet supprimé avec succès', 'success');
};

/**
 * Save project
 * @param {boolean} closeModal - Whether to close the modal after saving
 */
function saveProject(closeModal = true) {
    const title = document.getElementById('projectTitle').value.trim();
    const date = document.getElementById('projectDate').value.trim();
    const category = document.getElementById('projectCategory').value;
    const description = document.getElementById('projectDescription').value.trim();
    const image = document.getElementById('projectImage').value.trim();
    const link = document.getElementById('projectLink').value.trim();
    const tagsInput = document.getElementById('projectTags').value.trim();
    const published = document.getElementById('projectPublished').checked;
    
    // Validation
    if (!title || !category || !description) {
        showNotification('Veuillez remplir tous les champs obligatoires', 'error');
        return;
    }
    
    // Parse tags
    const tags = tagsInput ? tagsInput.split(',').map(tag => tag.trim()).filter(tag => tag) : [];
    
    const projectData = {
        id: editingProjectId || generateId(),
        title,
        date,
        category,
        description,
        image,
        link,
        tags,
        published,
        createdAt: editingProjectId ? projects.find(p => p.id === editingProjectId).createdAt : new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    
    if (editingProjectId) {
        // Update existing project
        const index = projects.findIndex(p => p.id === editingProjectId);
        if (index !== -1) {
            projects[index] = projectData;
        }
        showNotification('✅ Projet mis à jour avec succès !', 'success');
    } else {
        // Add new project
        projects.unshift(projectData);
        showNotification('✅ Projet ajouté avec succès !', 'success');
    }
    
    saveProjectsToStorage();
    displayProjects();
    
    if (closeModal) {
        // Close modal after a delay to show success message
        setTimeout(() => {
            projectModal.hide();
            // Reset form after modal closes
            setTimeout(() => {
                document.getElementById('projectForm').reset();
                document.getElementById('imagePreview').classList.add('d-none');
                editingProjectId = null;
            }, 300);
        }, 1200);
    } else {
        // Keep modal open but reset form for new entry
        setTimeout(() => {
            document.getElementById('projectForm').reset();
            document.getElementById('imagePreview').classList.add('d-none');
            editingProjectId = null;
            document.getElementById('modalTitle').innerHTML = '<i class="fas fa-plus-circle me-2"></i>Ajouter un projet';
            // Refocus on first field
            document.getElementById('projectTitle').focus();
        }, 800);
    }
}

/**
 * Handle image upload
 */
function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    if (!file.type.startsWith('image/')) {
        showNotification('Veuillez sélectionner une image valide', 'error');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(event) {
        const imageData = event.target.result;
        document.getElementById('projectImage').value = imageData;
        document.getElementById('imagePreview').classList.remove('d-none');
        document.getElementById('previewImg').src = imageData;
    };
    reader.readAsDataURL(file);
}

/**
 * Preview image from URL
 */
function previewImageFromUrl() {
    const url = document.getElementById('projectImage').value.trim();
    if (url && isValidUrl(url)) {
        document.getElementById('imagePreview').classList.remove('d-none');
        document.getElementById('previewImg').src = url;
    } else {
        document.getElementById('imagePreview').classList.add('d-none');
    }
}

/**
 * Validate URL
 */
function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

/**
 * Generate unique ID
 */
function generateId() {
    return 'project_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

/**
 * Show notification
 */
function showNotification(message, type = 'info') {
    // Remove any existing notifications first
    const existingNotifications = document.querySelectorAll('.notification-toast');
    existingNotifications.forEach(notif => notif.remove());
    
    const notification = document.createElement('div');
    notification.className = `alert alert-${type === 'error' ? 'danger' : type} notification-toast`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 99999;
        min-width: 350px;
        max-width: 500px;
        padding: 1.25rem 1.75rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        animation: slideInRight 0.4s ease;
        font-weight: 600;
        font-size: 1.05rem;
        border: none;
    `;
    
    const iconClass = type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle';
    const iconSize = '1.5rem';
    
    notification.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas fa-${iconClass} me-3" style="font-size: ${iconSize};"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Keep notification longer for success messages
    const displayTime = type === 'success' ? 2500 : 3000;
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.4s ease';
        setTimeout(() => notification.remove(), 400);
    }, displayTime);
}

/**
 * Export projects for display on main site
 */
window.getPublishedProjects = function() {
    return projects.filter(p => p.published).sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
    });
};

// Add animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

/**
 * Show storage error banner
 */
function showStorageError() {
    const dashboard = document.getElementById('adminDashboard');
    if (!dashboard || document.getElementById('storageErrorBanner')) return;
    
    const banner = document.createElement('div');
    banner.id = 'storageErrorBanner';
    banner.className = 'alert alert-warning storage-error-banner';
    banner.style.cssText = `
        position: fixed;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 9998;
        max-width: 800px;
        width: 90%;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    `;
    banner.innerHTML = `
        <div class="d-flex align-items-start">
            <i class="fas fa-exclamation-triangle me-3" style="font-size: 1.5rem; color: #f59e0b;"></i>
            <div style="flex: 1;">
                <h5 class="mb-2"><strong>⚠️ Stockage bloqué</strong></h5>
                <p class="mb-2">Votre navigateur bloque l'accès au stockage local. Vos projets ne seront pas sauvegardés.</p>
                <details>
                    <summary style="cursor: pointer; font-weight: 600;">💡 Solutions (cliquez pour voir)</summary>
                    <div class="mt-2">
                        <p><strong>Option 1 - Edge/Chrome:</strong></p>
                        <ol>
                            <li>Cliquez sur l'icône 🛡️ (bouclier) dans la barre d'adresse</li>
                            <li>Désactivez "Prévention du pistage" pour ce site</li>
                            <li>Rafraîchissez la page (F5)</li>
                        </ol>
                        <p><strong>Option 2 - Ouvrir en local:</strong></p>
                        <ol>
                            <li>Utilisez un serveur local (ex: Live Server dans VS Code)</li>
                            <li>Ou ouvrez avec: <code>file:///chemin/vers/admin.html</code> dans Chrome</li>
                        </ol>
                        <p><strong>Option 3 - Une fois déployé:</strong></p>
                        <ol>
                            <li>Sur Render (HTTPS), le problème disparaîtra automatiquement</li>
                        </ol>
                    </div>
                </details>
            </div>
            <button type="button" class="btn-close" onclick="this.parentElement.parentElement.remove()"></button>
        </div>
    `;
    
    document.body.appendChild(banner);
}

/**
 * Check if storage is available
 */
function isStorageAvailable() {
    try {
        const test = '__storage_test__';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
}

console.log('%c Admin Panel Loaded ', 'background: #ff6b35; color: #fff; padding: 10px; font-size: 14px; font-weight: bold;');

// Check storage availability on load
if (!isStorageAvailable()) {
    console.warn('%c ⚠️ ATTENTION: localStorage est bloqué ', 'background: #f59e0b; color: #000; padding: 8px; font-size: 12px; font-weight: bold;');
    console.info('%c 💡 Désactivez la "Prévention du tracking" dans les paramètres de votre navigateur ', 'background: #3b82f6; color: #fff; padding: 8px; font-size: 12px;');
}

