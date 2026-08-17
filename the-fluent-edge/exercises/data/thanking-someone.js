/*
  THANKING SOMEONE — datos del ejercicio
  Cada frase tiene: es (español), en (inglés) y category.
  Para agregar más frases, sumá objetos al array con el mismo formato.
*/

window.THANKING_SOMEONE_DATA = [
  // ---------- SAYING THANK YOU ----------
  { category: "Saying Thank You", es: "Agradécele a tu hermano por esto.", en: "Thank your brother for this." },
  { category: "Saying Thank You", es: "Agradécele.", en: "Thank him / her." },
  { category: "Saying Thank You", es: "Quiero agradecerte por este favor.", en: "I want to thank you for this favor." },
  { category: "Saying Thank You", es: "Quiero agradecerte por lo que tú haces.", en: "I want to thank you for what you do." },
  { category: "Saying Thank You", es: "Quiero agradecerte por todo.", en: "I want to thank you for everything." },
  { category: "Saying Thank You", es: "Solo quiero decir \"gracias\".", en: "I just want to say \"thank you\"." },
  { category: "Saying Thank You", es: "Solo puedo decir \"gracias por todo\".", en: "I can only say \"thanks for everything\"." },
  { category: "Saying Thank You", es: "No puedo agradecerte suficiente.", en: "I can't thank you enough." },
  { category: "Saying Thank You", es: "Agradécele a Mike por mí.", en: "Thank Mike for me." },
  { category: "Saying Thank You", es: "Agradécele a tu familia por mí.", en: "Thank your family for me." },
  { category: "Saying Thank You", es: "Gracias por esto.", en: "Thanks for this." },
  { category: "Saying Thank You", es: "No sé qué decir.", en: "I don't know what to say." },

  // ---------- EXPRESSING GRATITUDE ----------
  { category: "Expressing Gratitude", es: "Estoy muy agradecido contigo.", en: "I'm really grateful to you." },
  { category: "Expressing Gratitude", es: "Estoy muy agradecido contigo por lo que hiciste.", en: "I'm really grateful to you for what you did." },
  { category: "Expressing Gratitude", es: "Estoy muy agradecido contigo por lo que dijiste sobre mí.", en: "I'm really grateful to you for what you said about me." },
  { category: "Expressing Gratitude", es: "No podría estar más agradecido.", en: "I couldn't be more grateful." },
  { category: "Expressing Gratitude", es: "Estoy tan agradecido.", en: "I'm so grateful." },
  { category: "Expressing Gratitude", es: "Realmente aprecio lo que hiciste.", en: "I really appreciate what you did." },
  { category: "Expressing Gratitude", es: "Aprecio este favor.", en: "I appreciate this favor." },
  { category: "Expressing Gratitude", es: "Eres una gran ayuda para mí.", en: "You're a big help to me." },
  { category: "Expressing Gratitude", es: "Esto es muy importante para mí.", en: "This means a lot to me." },
  { category: "Expressing Gratitude", es: "Lo aprecio.", en: "I appreciate it." },
  { category: "Expressing Gratitude", es: "Realmente lo aprecio.", en: "I really appreciate it." },
  { category: "Expressing Gratitude", es: "Nunca olvidaré esto.", en: "I'll never forget this." },

  // ---------- PRAISING SOMEONE ----------
  { category: "Praising Someone", es: "Eso fue muy amable.", en: "That was very kind." },
  { category: "Praising Someone", es: "Eso fue muy amable de tu parte.", en: "That was very kind of you." },
  { category: "Praising Someone", es: "Eso fue muy bueno de tu parte.", en: "That was very good of you." },
  { category: "Praising Someone", es: "Eres un buen amigo.", en: "You're a good friend." },
  { category: "Praising Someone", es: "Siempre eres amable conmigo.", en: "You're always kind to me." },
  { category: "Praising Someone", es: "Eres una gran persona.", en: "You're a great person." },
  { category: "Praising Someone", es: "Eres muy honesto.", en: "You're very honest." },
  { category: "Praising Someone", es: "Solo una persona honesta podría hacer esto.", en: "Only an honest person could do this." },

  // ---------- REPAYING THE FAVOR ----------
  { category: "Repaying the Favor", es: "Me gustaría hacer algo por vos.", en: "I'd like to do something for you." },
  { category: "Repaying the Favor", es: "Me gustaría darte un presente.", en: "I'd like to give you a gift." },
  { category: "Repaying the Favor", es: "No podría hacer esto sin ti.", en: "I couldn't do this without you." },
  { category: "Repaying the Favor", es: "No podría terminar este trabajo sin tu ayuda.", en: "I couldn't finish this job without your help." },
  { category: "Repaying the Favor", es: "Tú estás siempre aquí para darme una mano.", en: "You're always here to give me a hand." },
  { category: "Repaying the Favor", es: "Tú estás siempre aquí para salvarme.", en: "You're always here to save me." },
  { category: "Repaying the Favor", es: "Algún día te devolveré el favor.", en: "Someday I'll return the favor." },
  { category: "Repaying the Favor", es: "Algún día yo haré algo por ti.", en: "Someday I'll do something for you." },
  { category: "Repaying the Favor", es: "Es una promesa.", en: "It's a promise." },
  { category: "Repaying the Favor", es: "Te debo una.", en: "I owe you one." },
  { category: "Repaying the Favor", es: "Te debo un favor.", en: "I owe you a favor." },
  { category: "Repaying the Favor", es: "Algún día te pagaré lo que te debo.", en: "Someday I'll pay you back what I owe you." },
  { category: "Repaying the Favor", es: "Si algún día necesitas algo, avísame.", en: "If you ever need anything, let me know." },
  { category: "Repaying the Favor", es: "Estaré allí para ti.", en: "I'll be there for you." },
  { category: "Repaying the Favor", es: "Solo avísame.", en: "Just let me know." },
  { category: "Repaying the Favor", es: "Dime cómo puedo pagarte.", en: "Tell me how I can pay you back." },
  { category: "Repaying the Favor", es: "Dime cómo puedo devolverte el favor.", en: "Tell me how I can return the favor." },
  { category: "Repaying the Favor", es: "Quiero hacer algo por ti.", en: "I want to do something for you." },
  { category: "Repaying the Favor", es: "Dime lo que quieres.", en: "Tell me what you want." },
  { category: "Repaying the Favor", es: "Dime lo que necesitas.", en: "Tell me what you need." },
  { category: "Repaying the Favor", es: "No te preocupes por el dinero.", en: "Don't worry about the money." }
];
