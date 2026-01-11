# Guide d'utilisation - Portfolio Guillaume KERE

## 🎯 Démarrage rapide

### Étape 1 : Ajouter votre photo de profil
1. Ouvrez le dossier `assets/images/`
2. Ajoutez votre photo professionnelle
3. Renommez-la en `profile.jpg`

**Important** : Utilisez une photo professionnelle de bonne qualité (minimum 800x800px)

### Étape 2 : Ouvrir le portfolio
1. Double-cliquez sur `index.html`
2. Le portfolio s'ouvre dans votre navigateur par défaut
3. Naviguez entre les différentes sections

### Étape 3 : Tester la responsivité
- Redimensionnez la fenêtre du navigateur
- Testez sur mobile et tablette
- Vérifiez que tout s'affiche correctement

## 📝 Personnalisation du contenu

### Modifier les informations personnelles

#### Dans la section Hero (Accueil)
Fichier : `index.html` (lignes 63-93)

```html
<h1 class="hero-title">
    <span class="hero-name">Votre Nom</span>
</h1>
<p class="hero-subtitle">
    Votre Titre Professionnel
</p>
```

#### Dans la section À propos
Fichier : `index.html` (lignes 97-170)
- Modifiez les paragraphes de présentation
- Mettez à jour vos coordonnées
- Adaptez le contenu à votre profil

### Ajouter/Modifier des expériences

Fichier : `index.html` (section Experience, lignes 174-358)

Copiez et adaptez ce modèle pour chaque expérience :

```html
<div class="timeline-item" data-aos="fade-up">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <div class="timeline-date">Période</div>
        <h4 class="timeline-title">Titre du poste</h4>
        <h5 class="timeline-organization">Nom de l'organisation</h5>
        <p class="timeline-description">
            Description de vos responsabilités et réalisations
        </p>
    </div>
</div>
```

### Ajouter des formations

Fichier : `index.html` (section Education, lignes 362-470)

Modèle pour une formation :

```html
<div class="col-lg-6" data-aos="fade-up">
    <div class="education-card h-100">
        <div class="education-card-header">
            <div class="education-icon">
                <i class="fas fa-graduation-cap"></i>
            </div>
            <div class="education-date">Date</div>
        </div>
        <div class="education-card-body">
            <h4 class="education-title">Titre du diplôme</h4>
            <h5 class="education-institution">Nom de l'établissement</h5>
        </div>
    </div>
</div>
```

### Modifier les compétences

Fichier : `index.html` (section Skills, lignes 474-670)

Pour ajouter une compétence professionnelle :

```html
<div class="col-lg-6" data-aos="fade-up">
    <div class="skill-card">
        <div class="skill-icon">
            <i class="fas fa-icon-name"></i>
        </div>
        <div class="skill-content">
            <h5>Nom de la compétence</h5>
            <p>Description détaillée</p>
        </div>
    </div>
</div>
```

### Ajouter des réalisations

Fichier : `index.html` (section Portfolio, lignes 674-695)

Cette section est actuellement en placeholder. Remplacez le contenu par :

```html
<div class="row g-4">
    <div class="col-lg-4" data-aos="fade-up">
        <div class="portfolio-item">
            <img src="assets/images/projet1.jpg" alt="Projet 1">
            <div class="portfolio-overlay">
                <h5>Titre du projet</h5>
                <p>Description brève</p>
                <a href="#" class="btn btn-primary">Voir plus</a>
            </div>
        </div>
    </div>
    <!-- Répétez pour chaque projet -->
</div>
```

**N'oubliez pas d'ajouter les styles correspondants dans `style.css`**

## 🎨 Personnalisation du design

### Changer les couleurs

Fichier : `assets/css/style.css` (lignes 6-17)

```css
:root {
    --primary-color: #2563eb;      /* Couleur principale */
    --primary-dark: #1e40af;       /* Variante foncée */
    --primary-light: #3b82f6;      /* Variante claire */
    --secondary-color: #1e293b;    /* Couleur secondaire */
    --text-dark: #1e293b;          /* Texte foncé */
    --text-light: #64748b;         /* Texte clair */
    --bg-light: #f8fafc;           /* Fond clair */
}
```

**Astuce** : Utilisez [Coolors.co](https://coolors.co/) pour trouver une palette harmonieuse

### Modifier les polices

Ajoutez dans `<head>` de `index.html` :

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Puis dans `style.css` :

```css
body {
    font-family: 'Poppins', sans-serif;
}
```

### Ajuster les animations

Fichier : `assets/js/script.js` (ligne 29)

```javascript
AOS.init({
    duration: 800,      // Durée de l'animation (ms)
    easing: 'ease-in-out',
    once: true,         // Animation unique au scroll
    offset: 100         // Décalage avant déclenchement
});
```

## 📧 Configuration du formulaire de contact

### Option 1 : FormSpree (Recommandé)

1. Créez un compte sur [FormSpree.io](https://formspree.io/)
2. Créez un nouveau formulaire
3. Copiez l'ID du formulaire
4. Modifiez le formulaire dans `index.html` :

```html
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

5. Commentez ou supprimez le JavaScript de gestion dans `script.js` (lignes 92-121)

### Option 2 : EmailJS

1. Créez un compte sur [EmailJS.com](https://www.emailjs.com/)
2. Configurez un service email
3. Créez un template
4. Ajoutez le SDK dans `index.html` :

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

5. Modifiez `script.js` pour utiliser EmailJS :

```javascript
emailjs.init('YOUR_PUBLIC_KEY');

function initializeContactForm() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(() => {
                showNotification('Message envoyé avec succès!', 'success');
                form.reset();
            }, (error) => {
                showNotification('Erreur lors de l\'envoi', 'error');
            });
    });
}
```

### Option 3 : Google Forms

1. Créez un formulaire Google Forms
2. Récupérez le lien du formulaire
3. Intégrez-le dans une iframe ou redirigez vers le formulaire

## 🌐 Mise en ligne

### GitHub Pages (Gratuit)

1. **Créez un repository GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/votre-username/PortefolioKERE.git
   git push -u origin main
   ```

2. **Activez GitHub Pages**
   - Allez dans Settings → Pages
   - Source : Deploy from branch
   - Branch : main / root
   - Cliquez sur Save

3. **Accédez à votre site**
   - URL : `https://votre-username.github.io/PortefolioKERE`

### Netlify (Gratuit)

1. **Via Drag & Drop**
   - Allez sur [Netlify.com](https://netlify.com)
   - Connectez-vous
   - Glissez-déposez le dossier du projet
   - Votre site est en ligne !

2. **Via Git**
   - Connectez votre repository GitHub
   - Netlify déploiera automatiquement à chaque push

### Vercel (Gratuit)

1. Connectez-vous sur [Vercel.com](https://vercel.com)
2. Importez votre repository GitHub
3. Cliquez sur Deploy
4. Votre site est en ligne avec HTTPS automatique

## 🔧 Dépannage

### Les images ne s'affichent pas
- Vérifiez que l'image `profile.jpg` existe dans `assets/images/`
- Vérifiez l'extension (jpg, jpeg, png)
- Vérifiez que le chemin dans le HTML est correct

### Les animations ne fonctionnent pas
- Vérifiez que le lien CDN AOS est présent dans `index.html`
- Ouvrez la console du navigateur (F12) pour voir les erreurs
- Vérifiez votre connexion Internet

### Le formulaire de contact ne fonctionne pas
- Le formulaire est en mode simulation par défaut
- Configurez FormSpree ou EmailJS (voir ci-dessus)
- Vérifiez la console pour les erreurs JavaScript

### Le site n'est pas responsive
- Testez dans différents navigateurs
- Vérifiez que Bootstrap est bien chargé
- Ouvrez les outils de développement (F12) et testez les différentes tailles

### Les styles ne s'appliquent pas
- Vérifiez que le fichier `style.css` est dans `assets/css/`
- Vérifiez le chemin dans la balise `<link>` du HTML
- Videz le cache du navigateur (Ctrl + F5)

## 📱 Test sur mobile

1. **Via navigateur**
   - Ouvrez les outils de développement (F12)
   - Cliquez sur l'icône mobile
   - Testez différentes tailles d'écran

2. **Sur appareil réel**
   - Hébergez temporairement avec `python -m http.server 8000`
   - Accédez depuis votre mobile : `http://IP-de-votre-PC:8000`
   - Ou utilisez [ngrok](https://ngrok.com/) pour un tunnel HTTPS

## 🎓 Ressources utiles

- **Icônes** : [Font Awesome](https://fontawesome.com/icons)
- **Couleurs** : [Coolors.co](https://coolors.co/)
- **Images** : [Unsplash](https://unsplash.com/) (gratuites)
- **Polices** : [Google Fonts](https://fonts.google.com/)
- **Documentation Bootstrap** : [getbootstrap.com](https://getbootstrap.com/)

## 💡 Conseils

1. **Photo de profil** : Utilisez une photo professionnelle de qualité
2. **Contenu** : Soyez concis et mettez en valeur vos réalisations
3. **Mise à jour** : Gardez votre portfolio à jour régulièrement
4. **SEO** : Remplissez correctement les balises meta dans le `<head>`
5. **Performance** : Optimisez vos images (compression, format WebP)
6. **Test** : Testez sur plusieurs navigateurs et appareils

## 📞 Support

Si vous rencontrez des difficultés :
1. Consultez d'abord ce guide
2. Vérifiez la console du navigateur (F12) pour les erreurs
3. Recherchez l'erreur sur Google ou Stack Overflow

---

Bon courage avec votre portfolio ! 🚀

