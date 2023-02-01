Fork d'une branche

Pour MAJ :

- git checkout meryngtattoo_2
- git rebase upstream/canary

Pour repartir de zéro:

- git checkout -b maBranche --track upstream/canary
- git cherry-pick [SHA du commit]
- git push -u origin maBranche

--> On a alors un changement de track mais permet d'être OK avec l'upstream
