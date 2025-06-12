const knowledgeBase = [
  { keywords: ["bonjour", "salut"], response: "Yo 👋 ! Bienvenue sur Arc 0.1." },
  { keywords: ["comment ça va", "ça va"], response: "Toujours au top ! Et toi ?" },
  { keywords: ["qui es-tu", "t'es qui", "tu es qui"], response: "Je suis Arc 0.1, une version minimaliste de W4Bot 🤖" },
  { keywords: ["merci"], response: "Avec plaisir 😉" },
  { keywords: ["aide", "help"], response: "Tape 'menu' pour voir toutes mes commandes." },
  { keywords: ["site web", "c’est quoi ce site"], response: "Tu es sur la démo d'Arc 0.1, le mini-bot de W4Pulse." },
  { keywords: ["github"], response: "Le GitHub sera bientôt public 🔧 : Lien à venir" },
  { keywords: ["créateur", "fondateur", "admin"], response: "Je suis né grâce à Enzo Izinga 👑" },
  { keywords: ["fonctionnalités"], response: "Je réponds à des questions, je calcule, je blague et plus 😄" },
  { keywords: ["dark mode", "mode dark"], response: "Toujours en full dark avec une touche néon 💡" },
  { keywords: ["langage", "technologie", "langages utilisés"], response: "HTML, CSS, JavaScript et Firebase côté serveur." },
  { keywords: ["version"], response: "Arc 0.1 (basé sur W4Bot 0.3.0)" },
  { keywords: ["blague"], response: "Pourquoi les développeurs confondent Halloween et Noël ? Parce que OCT 31 == DEC 25." },
  { keywords: ["menu", "commandes", "liste"], response: `
<b>Voici ce que tu peux me demander :</b><br>
- Bonjour / Salut 👋<br>
- Comment ça va ? 😊<br>
- Qui es-tu ? 🤖<br>
- C’est quoi ce site ? 🌐<br>
- Aide / Help 🆘<br>
- Merci 🙏<br>
- GitHub 💻<br>
- Ton créateur ? 🧠<br>
- Mode dark ? 🌒<br>
- Langages utilisés ? 📦<br>
- Version ? 🔢<br>
- Dis une blague 😂<br>
- Calculs (ex: 3+5*2) 🧮<br>
- Et quelques trucs en anglais 🇬🇧
    `.trim() }
];

function getArcResponse(input) {
  const msg = input.toLowerCase();

  // Calcul simple (si c'est une expression mathématique)
  if (/^[0-9+\-*/(). ]+$/.test(msg)) {
    try {
      const result = eval(msg);
      return `Le résultat est : ${result}`;
    } catch {
      return "Oups, ce calcul ne marche pas 😅";
    }
  }

  // Parcours de la base de connaissances
  for (let item of knowledgeBase) {
    if (item.keywords.some(k => msg.includes(k))) {
      return item.response;
    }
  }

  return "Je ne comprends pas encore ça... Essaie autre chose.";
}

// Gestion des entrées utilisateur
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("arc-input");
  const output = document.getElementById("arc-output");

  input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      const userMsg = input.value.trim();
      if (!userMsg) return;

      const botReply = getArcResponse(userMsg);

      output.innerHTML += `<p><b>Toi:</b> ${userMsg}</p>`;
      output.innerHTML += `<p><b>Arc:</b> ${botReply}</p>`;
      input.value = "";
      output.scrollTop = output.scrollHeight;
    }
  });
});
