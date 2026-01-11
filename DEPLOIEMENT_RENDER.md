# 🚀 Déploiement sur Render - Portfolio Guillaume KERE

## Guide complet pour héberger votre portfolio sur Render (GRATUIT)

### 📋 Prérequis

1. Un compte GitHub (gratuit)
2. Un compte Render (gratuit)
3. Git installé sur votre ordinateur

---

## Étape 1 : Créer un repository GitHub

### Option A : Via l'interface GitHub (Recommandé pour débutants)

1. **Créez un compte GitHub** (si vous n'en avez pas)
   - Allez sur [github.com](https://github.com/)
   - Cliquez sur "Sign up"
   - Suivez les instructions

2. **Créez un nouveau repository**
   - Cliquez sur le "+" en haut à droite
   - Sélectionnez "New repository"
   - Nom : `portfolio-guillaume-kere`
   - Description : `Portfolio professionnel - Communication & Journalisme`
   - Cochez "Public"
   - ❌ **NE PAS** cocher "Add a README file"
   - Cliquez sur "Create repository"

3. **Uploadez vos fichiers**
   - Sur la page du repository, cliquez sur "uploading an existing file"
   - Glissez-déposez TOUS les fichiers et dossiers de votre portfolio
   - Ajoutez un message : "Initial commit - Portfolio"
   - Cliquez sur "Commit changes"

### Option B : Via Git (Pour utilisateurs avancés)

Ouvrez PowerShell dans votre dossier `PortefolioKERE` et exécutez :

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit - Portfolio Guillaume KERE"

# Ajouter le repository distant (remplacez YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-guillaume-kere.git

# Pousser vers GitHub
git branch -M main
git push -u origin main
```

---

## Étape 2 : Déployer sur Render

### 1. Créer un compte Render

1. Allez sur [render.com](https://render.com/)
2. Cliquez sur "Get Started for Free"
3. Connectez-vous avec votre compte GitHub (recommandé)

### 2. Créer un nouveau site statique

1. **Dans le dashboard Render**, cliquez sur "New +"
2. Sélectionnez "Static Site"

### 3. Connecter votre repository

1. **Autorisez Render** à accéder à vos repositories GitHub
2. **Trouvez et sélectionnez** `portfolio-guillaume-kere`
3. Cliquez sur "Connect"

### 4. Configurer le site

Remplissez les informations suivantes :

- **Name** : `portfolio-guillaume-kere` (ou votre choix)
- **Branch** : `main`
- **Root Directory** : Laissez vide
- **Build Command** : Laissez vide ou mettez `echo "Building..."`
- **Publish Directory** : `.` (un point)

### 5. Variables d'environnement (optionnel)

Vous pouvez sauter cette étape pour l'instant.

### 6. Déployer !

1. Cliquez sur **"Create Static Site"**
2. Render va automatiquement déployer votre site
3. Attendez quelques minutes (1-3 minutes généralement)
4. Votre site sera accessible à une URL du type : `https://portfolio-guillaume-kere.onrender.com`

---

## 🎉 C'est fait ! Votre portfolio est en ligne !

### URL de votre site

Render vous fournira une URL gratuite :
- Format : `https://portfolio-guillaume-kere.onrender.com`
- Cette URL est **permanente** et **gratuite**

### Domaine personnalisé (Optionnel)

Si vous voulez un domaine personnalisé (ex: guillaumekere.com) :

1. Achetez un domaine (environ 10-15€/an) sur :
   - [Namecheap](https://www.namecheap.com/)
   - [Google Domains](https://domains.google/)
   - [OVH](https://www.ovh.com/)

2. Dans Render :
   - Allez dans les Settings de votre site
   - Section "Custom Domains"
   - Cliquez sur "Add Custom Domain"
   - Suivez les instructions pour configurer les DNS

---

## 🔄 Mettre à jour votre portfolio

### Méthode 1 : Via GitHub (Interface web)

1. Allez sur votre repository GitHub
2. Cliquez sur le fichier à modifier
3. Cliquez sur l'icône crayon (Edit)
4. Faites vos modifications
5. Cliquez sur "Commit changes"
6. **Render déploiera automatiquement** les changements (2-3 minutes)

### Méthode 2 : Via Git (Ligne de commande)

```bash
# Après avoir modifié vos fichiers localement

# Voir les changements
git status

# Ajouter les fichiers modifiés
git add .

# Créer un commit
git commit -m "Description de vos changements"

# Pousser vers GitHub
git push origin main

# Render déploiera automatiquement !
```

---

## ⚙️ Configuration automatique

Le fichier `render.yaml` que j'ai créé configure automatiquement votre site. Il contient :

- Type de service : Site statique
- Nom du service
- Répertoire de publication
- Redirections pour une navigation fluide

---

## 🐛 Dépannage

### Le site ne se charge pas

1. Vérifiez que tous les fichiers sont bien sur GitHub
2. Vérifiez les logs dans le dashboard Render
3. Assurez-vous que `index.html` est à la racine du projet

### Les images ne s'affichent pas

1. Vérifiez que le dossier `assets/images/` est bien uploadé
2. Vérifiez que `profile.jpeg` existe
3. Les chemins sont sensibles à la casse (Profile.jpeg ≠ profile.jpeg)

### Les styles ne s'appliquent pas

1. Videz le cache de votre navigateur (Ctrl + F5)
2. Vérifiez que le dossier `assets/css/` est bien uploadé
3. Attendez quelques minutes après le déploiement

### Le site est lent

- C'est normal la première fois (cold start)
- Après quelques visites, Render met en cache et c'est rapide

---

## 📊 Fonctionnalités de Render

### Gratuit à vie
- ✅ Bande passante illimitée
- ✅ Déploiement automatique depuis GitHub
- ✅ HTTPS gratuit (sécurisé)
- ✅ Pas de carte bancaire requise

### Statistiques
- Nombre de visites
- Temps de chargement
- Logs de déploiement

---

## 🔒 Sécurité

Votre site est automatiquement sécurisé avec :
- **HTTPS** : Certificat SSL gratuit
- **CDN** : Distribution mondiale rapide
- **Protection DDoS** : Incluse

---

## 📱 Partager votre portfolio

Une fois en ligne, partagez votre portfolio :

- **LinkedIn** : Ajoutez l'URL dans votre profil
- **CV** : Incluez le lien
- **Email** : Dans votre signature
- **Réseaux sociaux** : Partagez le lien

Exemple : `https://portfolio-guillaume-kere.onrender.com`

---

## 🎓 Ressources

- **Documentation Render** : [docs.render.com](https://docs.render.com/)
- **Support Render** : [community.render.com](https://community.render.com/)
- **Git Guide** : [git-scm.com/book/fr](https://git-scm.com/book/fr/v2)
- **GitHub Guide** : [guides.github.com](https://guides.github.com/)

---

## ✅ Checklist finale

Avant de déployer, vérifiez :

- [ ] Votre photo de profil (`profile.jpeg`) est ajoutée
- [ ] Vos informations sont correctes dans le HTML
- [ ] Tous les liens sociaux sont mis à jour
- [ ] Le formulaire de contact est configuré (si besoin)
- [ ] Vous avez testé le site localement
- [ ] Tous les fichiers sont dans le repository GitHub
- [ ] Le repository est public
- [ ] Render est connecté à votre repository

---

## 🚀 Prochaines étapes après déploiement

1. **Testez votre site** sur différents appareils
2. **Partagez l'URL** avec vos contacts
3. **Ajoutez le lien** à vos profils professionnels
4. **Mettez à jour** régulièrement avec vos nouvelles réalisations
5. **Surveillez** les statistiques de visite dans Render

---

**Félicitations ! Votre portfolio professionnel est maintenant accessible au monde entier !** 🌍✨

*Pour toute question, consultez la documentation de Render ou la communauté GitHub.*

