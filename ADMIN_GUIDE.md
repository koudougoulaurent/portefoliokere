# 🔐 Guide d'Administration - Portfolio Guillaume KERE

## Accès au panneau d'administration

### URL d'accès
Pour accéder au panneau d'administration, ajoutez `/admin.html` à l'URL de votre portfolio :

- **Local** : `file:///votre-chemin/PortefolioKERE/admin.html`
- **En ligne** : `https://portefoliokere.onrender.com/admin.html`

### Identifiants par défaut
```
Nom d'utilisateur : admin
Mot de passe       : admin123
```

⚠️ **Important** : Changez ces identifiants dans le fichier `assets/js/admin.js` (lignes 10-11) pour plus de sécurité !

---

## 📊 Tableau de bord

Après connexion, vous verrez :

### Statistiques
- **Projets totaux** : Nombre total de projets créés
- **Projets publiés** : Projets visibles sur le site
- **Brouillons** : Projets non publiés
- **Dernière MAJ** : Date de la dernière modification

### Actions principales
- 🔍 **Voir le site** : Prévisualiser votre portfolio public
- ➕ **Ajouter un projet** : Créer un nouveau projet
- 🚪 **Déconnexion** : Quitter le panneau admin

---

## ➕ Ajouter un projet

### Étape 1 : Ouvrir le formulaire
1. Cliquez sur le bouton **"Ajouter un projet"**
2. Un formulaire modal s'ouvre

### Étape 2 : Remplir les informations

#### Champs obligatoires (*)
- **Titre du projet** : Le nom de votre projet
  - Exemple : "Reportage FESPACO 2024"
  
- **Catégorie** : Type de projet
  - Reportage
  - Communication
  - Montage Vidéo
  - Design Graphique
  - Photographie
  - Community Management
  - Autre

- **Description** : Détails du projet
  - Expliquez le contexte, votre rôle, les résultats

#### Champs optionnels
- **Date** : Période de réalisation
  - Exemple : "Mars 2024" ou "Janvier - Février 2024"

- **Image** : Deux options :
  - **URL** : Collez un lien vers une image en ligne
  - **Upload** : Sélectionnez une image depuis votre ordinateur

- **Lien externe** : URL vers le projet en ligne
  - Exemple : Lien YouTube, article publié, etc.

- **Tags** : Mots-clés séparés par des virgules
  - Exemple : "vidéo, reportage, FESPACO, culture"

- **Publier ce projet** : Cochez pour rendre le projet visible
  - ✅ Coché = Publié sur le site
  - ☐ Décoché = Brouillon (invisible)

### Étape 3 : Enregistrer
1. Vérifiez l'aperçu de l'image si vous en avez ajouté une
2. Cliquez sur **"Enregistrer"**
3. Le projet apparaît dans la liste

---

## ✏️ Modifier un projet

1. Dans la liste des projets, trouvez celui à modifier
2. Cliquez sur le bouton **"Modifier"**
3. Le formulaire s'ouvre avec les données existantes
4. Modifiez les champs souhaités
5. Cliquez sur **"Enregistrer"**

---

## 🗑️ Supprimer un projet

1. Dans la liste des projets, trouvez celui à supprimer
2. Cliquez sur le bouton rouge **"Supprimer"**
3. Confirmez la suppression dans la popup
4. Le projet est définitivement supprimé

⚠️ **Attention** : Cette action est irréversible !

---

## 📸 Gestion des images

### Option 1 : URL d'image en ligne
**Avantages** :
- ✅ Rapide et simple
- ✅ Pas de limite de taille
- ✅ Fonctionne partout

**Comment faire** :
1. Uploadez votre image sur un service gratuit :
   - [Imgur](https://imgur.com/)
   - [ImageBB](https://imgbb.com/)
   - [Cloudinary](https://cloudinary.com/)
2. Copiez le lien direct de l'image
3. Collez-le dans le champ "URL de l'image"

### Option 2 : Upload direct
**Avantages** :
- ✅ Pas besoin de service externe
- ✅ Image stockée localement

**Limitations** :
- ⚠️ Stockée en Base64 dans le navigateur
- ⚠️ Peut ralentir si trop d'images volumineuses

**Comment faire** :
1. Cliquez sur "Upload d'image"
2. Sélectionnez votre image (JPG, PNG, WebP)
3. L'image est automatiquement convertie et sauvegardée

**Recommandation** : Utilisez des images optimisées (< 500KB)

---

## 🎨 Catégories de projets

Choisissez la catégorie qui correspond le mieux à votre projet :

- **Reportage** : JRI, reportages TV/Radio, couverture d'événements
- **Communication** : Campagnes, stratégies, plans de communication
- **Montage Vidéo** : Post-production, montage, effets visuels
- **Design Graphique** : Affiches, logos, identité visuelle
- **Photographie** : Shooting photo, photoreportage
- **Community Management** : Gestion réseaux sociaux, contenus web
- **Autre** : Projets ne rentrant pas dans les catégories ci-dessus

---

## 🏷️ Utilisation des tags

Les tags aident à catégoriser et rendre vos projets plus découvrables.

### Bonnes pratiques :
```
✅ Bon : vidéo, reportage, culture, FESPACO
❌ Mauvais : VIDÉO_REPORTAGE_CULTURE_FESPACO
```

### Exemples de tags pertinents :
- **Techniques** : vidéo, photo, montage, motion design
- **Thématiques** : culture, sport, politique, société
- **Outils** : Premiere Pro, Photoshop, Canon
- **Événements** : FESPACO, conférence, festival
- **Clients** : nom de l'organisation (si public)

---

## 📱 Statut des projets

### Publié ✅
- Le projet est **visible** sur votre portfolio public
- Il apparaît dans la section "Réalisations" du site
- Tout visiteur peut le voir

### Brouillon 📝
- Le projet est **invisible** sur le site public
- Seul vous le voyez dans l'admin
- Utile pour :
  - Préparer des projets avant publication
  - Garder des archives non publiques
  - Tester l'affichage avant de publier

### Comment changer le statut ?
1. Éditez le projet
2. Cochez/décochez "Publier ce projet"
3. Enregistrez

---

## 💾 Stockage des données

### Comment ça fonctionne ?
- Les projets sont stockés dans le **localStorage** du navigateur
- Pas besoin de base de données
- Les données restent même après fermeture du navigateur

### Important à savoir :
- ⚠️ Les données sont stockées **localement** sur votre ordinateur
- ⚠️ Si vous changez de navigateur, les projets ne seront pas synchronisés
- ⚠️ Si vous videz le cache du navigateur, les projets seront supprimés

### Sauvegarder vos projets :
Pour éviter de perdre vos données :

1. Ouvrez la Console du navigateur (F12)
2. Tapez :
   ```javascript
   copy(localStorage.getItem('portfolio_projects'))
   ```
3. Collez dans un fichier texte et sauvegardez

Pour restaurer :
1. Copiez le contenu du fichier
2. Dans la Console :
   ```javascript
   localStorage.setItem('portfolio_projects', 'COLLEZ_ICI')
   ```

---

## 🔒 Sécurité

### Changer les identifiants

1. Ouvrez `assets/js/admin.js`
2. Lignes 10-11, modifiez :
   ```javascript
   const CONFIG = {
       username: 'votre_nouveau_nom',
       password: 'votre_nouveau_mot_de_passe',
       // ...
   };
   ```
3. Sauvegardez le fichier
4. Poussez vers GitHub :
   ```bash
   git add assets/js/admin.js
   git commit -m "Update admin credentials"
   git push origin main
   ```

### Recommandations :
- ✅ Utilisez un mot de passe fort (12+ caractères)
- ✅ Mélangez lettres, chiffres et symboles
- ✅ Ne partagez pas vos identifiants
- ⚠️ Cette authentification est basique, pour un site personnel

---

## 🚀 Workflow recommandé

### Pour ajouter un nouveau projet :

1. **Préparez vos contenus**
   - Titre clair et accrocheur
   - Description détaillée (3-5 phrases)
   - Image de qualité (JPG optimisé)
   - Tags pertinents

2. **Créez le projet en brouillon**
   - Remplissez tous les champs
   - Décochez "Publier"
   - Enregistrez

3. **Prévisualisez**
   - Cliquez sur "Voir le site"
   - Publiez temporairement pour tester
   - Vérifiez l'affichage sur mobile

4. **Publiez**
   - Si tout est OK, gardez "Publier" coché
   - Enregistrez

5. **Partagez**
   - Le projet est maintenant visible
   - Partagez le lien de votre portfolio !

---

## 🆘 Résolution de problèmes

### Les projets ne s'affichent pas sur le site
**Solutions** :
1. Vérifiez que le projet est **publié** (pas en brouillon)
2. Rafraîchissez la page principale (Ctrl + F5)
3. Vérifiez que JavaScript est activé dans le navigateur

### L'image ne s'affiche pas
**Solutions** :
1. Vérifiez que l'URL de l'image est correcte et accessible
2. Essayez d'ouvrir l'URL dans un nouvel onglet
3. Utilisez l'upload direct plutôt qu'une URL
4. Vérifiez la taille de l'image (< 2MB recommandé)

### Impossible de se connecter
**Solutions** :
1. Vérifiez que vous utilisez les bons identifiants
2. Essayez en navigation privée
3. Videz le cache du navigateur

### Les projets ont disparu
**Solutions** :
1. Vérifiez que vous êtes sur le même navigateur/ordinateur
2. Restaurez depuis votre sauvegarde (voir section Stockage)
3. Ne videz pas le cache sans sauvegarder avant

---

## 📊 Exemples de projets

### Exemple 1 : Reportage

```
Titre: Couverture du FESPACO 2024
Date: Février 2024
Catégorie: Reportage
Description: Reportage exclusif sur le Festival Panafricain 
du Cinéma et de la télévision de Ouagadougou. Interviews 
des réalisateurs, couverture des projections et ambiance 
du festival. Production complète pour TV2 Burkina.
Tags: reportage, cinéma, FESPACO, culture, Burkina
Lien: https://youtube.com/watch?v=...
Publié: ✅
```

### Exemple 2 : Communication

```
Titre: Campagne digitale - Sécurité routière
Date: Janvier 2024
Catégorie: Communication
Description: Conception et mise en œuvre d'une campagne 
de sensibilisation sur les réseaux sociaux pour le 
Ministère de la Sécurité. Création de visuels, 
rédaction de contenus et community management pendant 
3 mois. Résultat: +150% d'engagement.
Tags: communication, digital, réseaux sociaux, campagne
Publié: ✅
```

---

## 🎯 Conseils pour un portfolio attractif

### Qualité > Quantité
- Mieux vaut 5 excellents projets que 20 moyens
- Sélectionnez vos meilleures réalisations

### Descriptions convaincantes
- Contexte : Quel était le défi ?
- Action : Qu'avez-vous fait ?
- Résultat : Quel impact ?

### Images professionnelles
- Privilégiez la qualité
- Format paysage recommandé (16:9)
- Évitez les images floues ou pixelisées

### Mise à jour régulière
- Ajoutez vos nouveaux projets rapidement
- Supprimez les anciens moins pertinents
- Gardez votre portfolio frais et actuel

---

## 🔗 Ressources utiles

### Hébergement d'images
- [Imgur](https://imgur.com/) - Gratuit, sans inscription
- [ImageBB](https://imgbb.com/) - Interface simple
- [Cloudinary](https://cloudinary.com/) - Gratuit avec limites

### Optimisation d'images
- [TinyPNG](https://tinypng.com/) - Compression automatique
- [Squoosh](https://squoosh.app/) - Optimisation avancée
- [Compressor.io](https://compressor.io/) - Simple et efficace

### Inspiration
- [Behance](https://behance.net/) - Portfolios créatifs
- [Dribbble](https://dribbble.com/) - Design inspiration

---

**Félicitations ! Vous maîtrisez maintenant votre panneau d'administration** 🎉

Pour toute question, consultez ce guide ou les commentaires dans le code source.

