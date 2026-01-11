# 🚀 Déploiement Rapide sur Render (5 minutes)

## Méthode Simple - Sans Git (Recommandé)

### Étape 1 : Préparer les fichiers ✅
Votre portfolio est déjà prêt ! Tous les fichiers nécessaires sont là.

### Étape 2 : Créer un compte GitHub (2 minutes)

1. Allez sur **[github.com](https://github.com/)**
2. Cliquez sur **"Sign up"**
3. Créez votre compte (gratuit)

### Étape 3 : Uploader le portfolio sur GitHub (2 minutes)

1. **Connectez-vous** à GitHub
2. Cliquez sur le **"+"** en haut à droite → **"New repository"**
3. Remplissez :
   - **Repository name** : `portfolio-guillaume-kere`
   - **Public** : ✅ Coché
   - **Add a README** : ❌ NON coché
4. Cliquez sur **"Create repository"**
5. Sur la page suivante, cliquez sur **"uploading an existing file"**
6. **Glissez-déposez** tout le contenu de votre dossier `PortefolioKERE`
   - ✅ index.html
   - ✅ render.yaml
   - ✅ _redirects
   - ✅ Dossier assets (entier)
   - ✅ Tous les fichiers .md
7. En bas, cliquez sur **"Commit changes"**

### Étape 4 : Déployer sur Render (1 minute)

1. Allez sur **[render.com](https://render.com/)**
2. Cliquez sur **"Get Started for Free"**
3. Connectez-vous avec **"Sign in with GitHub"**
4. Autorisez Render à accéder à vos repositories
5. Dans le dashboard, cliquez sur **"New +"** → **"Static Site"**
6. Sélectionnez votre repository **"portfolio-guillaume-kere"**
7. Configurez :
   ```
   Name: portfolio-guillaume-kere
   Branch: main
   Build Command: (laisser vide)
   Publish Directory: .
   ```
8. Cliquez sur **"Create Static Site"**

### Étape 5 : C'est en ligne ! 🎉

Attendez 2-3 minutes, votre site sera accessible à :
**`https://portfolio-guillaume-kere.onrender.com`**

---

## 📝 Pour mettre à jour votre portfolio plus tard

### Via GitHub (Simple)

1. Allez sur **github.com/VOTRE-USERNAME/portfolio-guillaume-kere**
2. Cliquez sur le fichier à modifier
3. Cliquez sur l'icône **crayon** (Edit)
4. Faites vos modifications
5. Cliquez sur **"Commit changes"**
6. Render mettra automatiquement à jour votre site (2-3 min)

### Pour ajouter de nouvelles images

1. Sur GitHub, allez dans le dossier **assets/images/**
2. Cliquez sur **"Add file"** → **"Upload files"**
3. Glissez vos images
4. Cliquez sur **"Commit changes"**

---

## ✅ Checklist avant déploiement

- [x] Photo de profil ajoutée (`profile.jpeg`)
- [x] Nom corrigé (Issaka)
- [x] Localisation corrigée (Tenkodogo)
- [x] Design noir et orange appliqué
- [x] Fichiers de configuration Render créés

**Vous êtes prêt à déployer !** 🚀

---

## 🆘 Besoin d'aide ?

Si vous rencontrez un problème :
1. Vérifiez que tous les fichiers sont bien uploadés sur GitHub
2. Attendez 3-5 minutes après chaque déploiement
3. Consultez le fichier `DEPLOIEMENT_RENDER.md` pour le guide détaillé

---

## 🎯 Votre URL finale

Une fois déployé, votre portfolio sera accessible à :

**`https://portfolio-guillaume-kere.onrender.com`**

Vous pourrez la partager sur :
- ✉️ Votre signature email
- 💼 LinkedIn
- 📱 Vos réseaux sociaux
- 📄 Votre CV

**Bon déploiement !** 🌟

