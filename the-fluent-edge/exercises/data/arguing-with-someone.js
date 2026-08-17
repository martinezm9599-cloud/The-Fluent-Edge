/*
  ARGUING WITH SOMEONE — datos del ejercicio
  Cada frase tiene: es (español), en (inglés) y category.
  Para agregar más frases, sumá objetos al array con el mismo formato.
*/

window.ARGUING_WITH_SOMEONE_DATA = [
  // ---------- REFUSING TO ARGUE ----------
  { category: "Refusing to Argue", es: "Yo no quiero discutir con usted.", en: "I don't want to argue with you." },
  { category: "Refusing to Argue", es: "Yo no voy a discutir sobre esto.", en: "I'm not going to argue about this." },
  { category: "Refusing to Argue", es: "Yo no voy a tener esta discusión acá.", en: "I'm not going to have this argument here." },
  { category: "Refusing to Argue", es: "Esta discusión no tiene sentido.", en: "This argument doesn't make sense." },
  { category: "Refusing to Argue", es: "Lo que vos decís no tiene sentido.", en: "What you're saying doesn't make sense." },
  { category: "Refusing to Argue", es: "No tiene sentido para mí.", en: "It doesn't make sense to me." },
  { category: "Refusing to Argue", es: "Siempre discutimos sobre lo mismo.", en: "We always argue about the same thing." },
  { category: "Refusing to Argue", es: "Siempre tenemos la misma discusión.", en: "We always have the same argument." },
  { category: "Refusing to Argue", es: "A mí no me gustan las discusiones.", en: "I don't like arguments." },
  { category: "Refusing to Argue", es: "Discúlpeme, pero usted está equivocado.", en: "Excuse me, but you're wrong." },
  { category: "Refusing to Argue", es: "No estoy equivocado.", en: "I'm not wrong." },
  { category: "Refusing to Argue", es: "Usted es muy maleducado.", en: "You're very rude." },
  { category: "Refusing to Argue", es: "No discuto con gente maleducada.", en: "I don't argue with rude people." },
  { category: "Refusing to Argue", es: "No voy a escucharte si eres maleducado.", en: "I'm not going to listen to you if you're rude." },

  // ---------- REJECTING THE OTHER SIDE ----------
  { category: "Rejecting the Other Side", es: "Esto es inaceptable para mí.", en: "This is unacceptable to me." },
  { category: "Rejecting the Other Side", es: "Esta discusión es inaceptable.", en: "This argument is unacceptable." },
  { category: "Rejecting the Other Side", es: "Este punto de vista es inaceptable.", en: "This point of view is unacceptable." },
  { category: "Rejecting the Other Side", es: "Usted no respeta las reglas.", en: "You don't respect the rules." },
  { category: "Rejecting the Other Side", es: "Estas son las reglas y tenés que respetarlas.", en: "These are the rules and you have to respect them." },
  { category: "Rejecting the Other Side", es: "Lo que dices no está bien.", en: "What you're saying isn't right." },
  { category: "Rejecting the Other Side", es: "Lo que haces no está bien.", en: "What you're doing isn't right." },
  { category: "Rejecting the Other Side", es: "No me digas nada.", en: "Don't say anything to me." },
  { category: "Rejecting the Other Side", es: "Eso no es correcto.", en: "That's not correct." },
  { category: "Rejecting the Other Side", es: "Eso está mal.", en: "That's wrong." },

  // ---------- CONFRONTING BEHAVIOR ----------
  { category: "Confronting Behavior", es: "Pensá lo que quieras.", en: "Think whatever you want." },
  { category: "Confronting Behavior", es: "Hacé lo que quieras.", en: "Do whatever you want." },
  { category: "Confronting Behavior", es: "Dí lo que tengas que decir.", en: "Say whatever you have to say." },
  { category: "Confronting Behavior", es: "Hacé lo que tengas que hacer.", en: "Do whatever you have to do." },
  { category: "Confronting Behavior", es: "Hiciste algo muy malo.", en: "You did something really bad." },
  { category: "Confronting Behavior", es: "Tendrás que pagar por esto.", en: "You'll have to pay for this." },
  { category: "Confronting Behavior", es: "Tendrás que hacer algo con este problema.", en: "You'll have to do something about this problem." },
  { category: "Confronting Behavior", es: "Yo no pagaré por esto.", en: "I won't pay for this." },
  { category: "Confronting Behavior", es: "Yo no voy a arreglar tu problema.", en: "I'm not going to fix your problem." },
  { category: "Confronting Behavior", es: "Tú eres muy egoísta.", en: "You're very selfish." },
  { category: "Confronting Behavior", es: "Lo que tú hiciste fue muy egoísta.", en: "What you did was very selfish." },
  { category: "Confronting Behavior", es: "¿Por qué hiciste esto?", en: "Why did you do this?" },
  { category: "Confronting Behavior", es: "¿Por qué dijiste esto?", en: "Why did you say this?" },
  { category: "Confronting Behavior", es: "¿Por qué rompiste esto?", en: "Why did you break this?" },
  { category: "Confronting Behavior", es: "¿Sabes lo que hiciste?", en: "Do you know what you did?" },
  { category: "Confronting Behavior", es: "¿Entendés la situación?", en: "Do you understand the situation?" },

  // ---------- SETTING LIMITS ----------
  { category: "Setting Limits", es: "Tenés que ser más amable.", en: "You have to be kinder." },
  { category: "Setting Limits", es: "Usted no es una persona muy amable.", en: "You're not a very kind person." },
  { category: "Setting Limits", es: "No fuiste amable.", en: "You weren't kind." },
  { category: "Setting Limits", es: "No puedes hacer eso aquí.", en: "You can't do that here." },
  { category: "Setting Limits", es: "No puedes estar aquí.", en: "You can't be here." },
  { category: "Setting Limits", es: "Tengo que pedirte que te vayas.", en: "I have to ask you to leave." },
  { category: "Setting Limits", es: "Tengo que pedirte que seas más amable.", en: "I have to ask you to be kinder." },
  { category: "Setting Limits", es: "Por favor, vete.", en: "Please leave." },
  { category: "Setting Limits", es: "No quiero verte, vete.", en: "I don't want to see you, leave." },
  { category: "Setting Limits", es: "Estás atacándome.", en: "You're attacking me." },
  { category: "Setting Limits", es: "Y yo no estoy atacándote.", en: "And I'm not attacking you." },

  // ---------- CALLING OUT DISHONESTY ----------
  { category: "Calling Out Dishonesty", es: "Estás mintiendo.", en: "You're lying." },
  { category: "Calling Out Dishonesty", es: "No mientas más.", en: "Don't lie anymore." },
  { category: "Calling Out Dishonesty", es: "No me hables más.", en: "Don't talk to me anymore." },
  { category: "Calling Out Dishonesty", es: "No vengas más aquí.", en: "Don't come here anymore." },
  { category: "Calling Out Dishonesty", es: "No te creo.", en: "I don't believe you." },
  { category: "Calling Out Dishonesty", es: "Eres un mentiroso.", en: "You're a liar." },
  { category: "Calling Out Dishonesty", es: "Eres una mala influencia.", en: "You're a bad influence." },
  { category: "Calling Out Dishonesty", es: "Eres una mala influencia para la gente.", en: "You're a bad influence on people." },
  { category: "Calling Out Dishonesty", es: "No me gusta tu actitud.", en: "I don't like your attitude." },
  { category: "Calling Out Dishonesty", es: "No entiendo por qué tenés esa actitud.", en: "I don't understand why you have that attitude." },
  { category: "Calling Out Dishonesty", es: "No me expliques.", en: "Don't explain it to me." },
  { category: "Calling Out Dishonesty", es: "Déjame explicarte.", en: "Let me explain it to you." },
  { category: "Calling Out Dishonesty", es: "No me dejas explicarte.", en: "You won't let me explain." },
  { category: "Calling Out Dishonesty", es: "No puedo explicarte porque no me escuchas.", en: "I can't explain it to you because you don't listen to me." },

  // ---------- WARNINGS & ULTIMATUMS ----------
  { category: "Warnings & Ultimatums", es: "Tú eres el principal problema aquí.", en: "You're the main problem here." },
  { category: "Warnings & Ultimatums", es: "Tú eres quien debería disculparse.", en: "You're the one who should apologize." },
  { category: "Warnings & Ultimatums", es: "Tú eres quien debería irse.", en: "You're the one who should leave." },
  { category: "Warnings & Ultimatums", es: "Tú eres quien debería callarse.", en: "You're the one who should be quiet." },
  { category: "Warnings & Ultimatums", es: "Por favor, cállate.", en: "Please be quiet." },
  { category: "Warnings & Ultimatums", es: "Por favor, cállate, no quiero escucharte más.", en: "Please be quiet, I don't want to hear you anymore." },
  { category: "Warnings & Ultimatums", es: "Es mi última advertencia.", en: "This is my last warning." },
  { category: "Warnings & Ultimatums", es: "No te daré otra advertencia.", en: "I won't give you another warning." },
  { category: "Warnings & Ultimatums", es: "No me hagas llamar a la policía.", en: "Don't make me call the police." },
  { category: "Warnings & Ultimatums", es: "No me hagas hacer esto.", en: "Don't make me do this." },
  { category: "Warnings & Ultimatums", es: "No me hagas ir allá.", en: "Don't make me go over there." },
  { category: "Warnings & Ultimatums", es: "No confío en ti.", en: "I don't trust you." },
  { category: "Warnings & Ultimatums", es: "No confío en tu palabra.", en: "I don't trust your word." },
  { category: "Warnings & Ultimatums", es: "No confío en tus acciones.", en: "I don't trust your actions." },
  { category: "Warnings & Ultimatums", es: "¿Quién podría confiar en vos?", en: "Who could trust you?" }
];
