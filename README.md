# FAQ---Responsive---Javascript

Challenge proposé sur le site Frontend Mentor.

Difficulté: Javascript

L'objectif de ce challenge était de coder en javascript la manière dont les divs (réponses aux questions) aller s'ouvrir et se fermer au moment d'un click dessus.
Cela avec les fleches qui s'animent faisant une rotation à 180°.

J'ai trouvé la solution en faisant une double boucle for. 
La première boucle permettant de faire apparaitre la div correspondante en fonction de la question.
La seconde boucle à l'intérieur de la première boucle, permet de fermer une div lorsque l'on clique sur une autre div afin de ne pas avoir de doublons.
Résultat:
![Screenshot](FAQ.gif)
