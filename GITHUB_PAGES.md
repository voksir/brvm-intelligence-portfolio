# Guide — Publier le portfolio sur GitHub Pages

Username GitHub : **voksir**

## Étape 1 — Créer le repo GitHub

1. Va sur [github.com/new](https://github.com/new)
2. Nom du repo : `brvm-intelligence-portfolio`
3. Visibilité : **Public**
4. Ne coche **pas** "Add a README" (tu en as déjà un localement)
5. Clique **Create repository**

## Étape 2 — Pousser le code local

Ouvre PowerShell dans le dossier du portfolio :

```powershell
cd C:\Users\lenovo\Desktop\Projet-saas\brvm-intelligence-portfolio

git init
git add .
git commit -m "Initial portfolio: BRVM Intelligence multi-agent AI showcase"
git branch -M main
git remote add origin https://github.com/voksir/brvm-intelligence-portfolio.git
git push -u origin main
```

## Étape 3 — Activer GitHub Pages

1. Va sur `https://github.com/voksir/brvm-intelligence-portfolio/settings/pages`
2. **Source** : Deploy from a branch
3. **Branch** : `main` — folder `/ (root)`
4. Clique **Save**
5. Attends 1 à 3 minutes

## Étape 4 — Vérifier

Ouvre : **https://voksir.github.io/brvm-intelligence-portfolio/**

Checklist :

- [ ] Page d'accueil en anglais
- [ ] Switch EN | FR fonctionne
- [ ] Section "7 AI Agents" visible avec les 6 cartes
- [ ] 4 captures PDF s'affichent
- [ ] Page `/agents/index.html` accessible
- [ ] Lien "Source Repository" pointe vers BRVM-Intelligence
- [ ] Test sur mobile (responsive)

## Mettre à jour le portfolio

Après avoir ajouté de nouvelles captures dans `assets/results/` :

```powershell
git add .
git commit -m "Update portfolio screenshots"
git push
```

GitHub Pages se met à jour automatiquement en ~1 minute.

## Liens pour le CV

```
Portfolio : https://voksir.github.io/brvm-intelligence-portfolio/
Code      : https://github.com/voksir/BRVM-Intelligence
```
