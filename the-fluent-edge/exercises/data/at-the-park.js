/*
  AT THE PARK — datos del ejercicio
  Cada frase tiene: es (español), en (inglés) y category.
  Si hay más de una traducción natural, se separan con " / ".
*/

window.AT_THE_PARK_DATA = [
  // ---------- GOING TO THE PARK ----------
  { category: "Going to the Park", es: "Es un lindo día, vamos a pasear.", en: "It's a nice day, let's go for a walk." },
  { category: "Going to the Park", es: "Vamos al parque, está cerca de aquí.", en: "Let's go to the park, it's close to here. / Let's go to the park, it's nearby." },
  { category: "Going to the Park", es: "El parque está cerca del centro.", en: "The park is near downtown. / The park is close to the center." },
  { category: "Going to the Park", es: "Es un buen lugar para pasear.", en: "It's a good place for a walk. / It's a nice place to walk around." },
  { category: "Going to the Park", es: "Te gustará.", en: "You'll like it." },
  { category: "Going to the Park", es: "Te gustará el parque.", en: "You'll like the park." },
  { category: "Going to the Park", es: "Podemos ir a pie, no está lejos.", en: "We can walk, it's not far. / We can go on foot, it's not far." },

  // ---------- PLAYGROUND AND FACILITIES ----------
  { category: "Playground and Facilities", es: "Hay juegos para los niños y lugares para sentarnos.", en: "There are playgrounds for the kids and places to sit. / There are play areas for the children and places to sit." },
  { category: "Playground and Facilities", es: "O podemos sentarnos en el pasto.", en: "Or we can sit on the grass." },
  { category: "Playground and Facilities", es: "Algunos juegos están rotos, los niños no pueden usarlos.", en: "Some of the playground equipment is broken, the kids can't use it." },
  { category: "Playground and Facilities", es: "Son peligrosos.", en: "They're dangerous." },
  { category: "Playground and Facilities", es: "Deberían arreglarlos.", en: "They should fix them." },
  { category: "Playground and Facilities", es: "Pero los demás juegos están buenos.", en: "But the rest of the equipment is fine. / But the other ones are good." },
  { category: "Playground and Facilities", es: "A los niños les gustará.", en: "The kids will like it." },
  { category: "Playground and Facilities", es: "Hay incluso mesas de picnic.", en: "There are even picnic tables." },
  { category: "Playground and Facilities", es: "Algún día podemos venir y hacer un asado.", en: "Someday we can come and have a barbecue. / Someday we can come and do a cookout." },
  { category: "Playground and Facilities", es: "Podemos hacer un asado en el parque.", en: "We can have a barbecue at the park." },
  { category: "Playground and Facilities", es: "Aunque no hay ningún baño.", en: "Although there's no bathroom. / Though there isn't a restroom." },
  { category: "Playground and Facilities", es: "Y no hay ningún lugar para sacar agua.", en: "And there's nowhere to get water. / And there's no place to get water." },
  { category: "Playground and Facilities", es: "Aunque podemos llevar nuestra propia agua.", en: "Although we can bring our own water." },
  { category: "Playground and Facilities", es: "Esas son las únicas desventajas del parque.", en: "Those are the only disadvantages of the park. / Those are the only downsides of the park." },
  { category: "Playground and Facilities", es: "Tienes que llevar tu propia agua.", en: "You have to bring your own water." },

  // ---------- SHOWING AROUND AND SAFETY ----------
  { category: "Showing Around and Safety", es: "Dejame mostrarte el parque, yo lo conozco muy bien.", en: "Let me show you the park, I know it very well." },
  { category: "Showing Around and Safety", es: "He venido aquí muchas veces.", en: "I've been here many times." },
  { category: "Showing Around and Safety", es: "Es un lugar bastante seguro porque hay cámaras y policías.", en: "It's a pretty safe place because there are cameras and police." },
  { category: "Showing Around and Safety", es: "En general no hay problemas acá.", en: "In general there are no problems here. / Generally there aren't any problems here." },
  { category: "Showing Around and Safety", es: "Hay muchos lugares para caminar.", en: "There are many places to walk. / There are lots of walking paths." },
  { category: "Showing Around and Safety", es: "No hay animales.", en: "There are no animals." },
  { category: "Showing Around and Safety", es: "No hay peligro para los niños.", en: "There's no danger for the kids." },
  { category: "Showing Around and Safety", es: "Además, hay muchos lugares verdes.", en: "Besides, there are lots of green areas. / Plus, there's a lot of greenery." },
  { category: "Showing Around and Safety", es: "Además es muy hermoso.", en: "Besides, it's very beautiful. / And it's very beautiful." },
  { category: "Showing Around and Safety", es: "Es bastante hermoso.", en: "It's quite beautiful. / It's pretty beautiful." },
  { category: "Showing Around and Safety", es: "El parque es un buen lugar para andar en bicicleta.", en: "The park is a good place to ride a bike." },
  { category: "Showing Around and Safety", es: "Hay mucha gente andando en bicicleta.", en: "There are a lot of people riding bikes." },
  { category: "Showing Around and Safety", es: "Tal vez algún día podemos hacer un picnic en la plaza.", en: "Maybe someday we can have a picnic in the square. / Maybe someday we can have a picnic in the plaza." },

  // ---------- FINDING A SPOT ----------
  { category: "Finding a Spot", es: "Este es un buen lugar, quedémonos aquí.", en: "This is a good spot, let's stay here." },
  { category: "Finding a Spot", es: "Sentémonos acá, sentémonos en el pasto.", en: "Let's sit here, let's sit on the grass." },
  { category: "Finding a Spot", es: "El pasto está verde y seco.", en: "The grass is green and dry." },
  { category: "Finding a Spot", es: "Yo siempre vengo aquí con mi familia, es la parte más tranquila del parque.", en: "I always come here with my family, it's the quietest part of the park." },
  { category: "Finding a Spot", es: "Esta es la parte más hermosa del parque.", en: "This is the most beautiful part of the park." },
  { category: "Finding a Spot", es: "No conocía esta parte del parque, es nueva para mí.", en: "I didn't know this part of the park, it's new to me." },
  { category: "Finding a Spot", es: "Es la parte más nueva.", en: "It's the newest part." },
  { category: "Finding a Spot", es: "Es la parte más vieja.", en: "It's the oldest part." },
  { category: "Finding a Spot", es: "Deberíamos venir más seguido aquí.", en: "We should come here more often." },
  { category: "Finding a Spot", es: "No venimos aquí muy seguido.", en: "We don't come here very often." },
  { category: "Finding a Spot", es: "No tan seguido como deberíamos.", en: "Not as often as we should." },
  { category: "Finding a Spot", es: "No tanto como me gustaría.", en: "Not as much as I'd like. / Not as often as I'd like." },

  // ---------- CROWDS AND NOISE ----------
  { category: "Crowds and Noise", es: "Está lleno de gente los fines de semana.", en: "It's full of people on the weekends. / It's crowded on weekends." },
  { category: "Crowds and Noise", es: "Pero está vacío los días de semana.", en: "But it's empty on weekdays." },
  { category: "Crowds and Noise", es: "Es mejor venir los días de semana.", en: "It's better to come on weekdays." },
  { category: "Crowds and Noise", es: "No hay tanto ruido.", en: "There's not as much noise." },
  { category: "Crowds and Noise", es: "No hay tantas personas.", en: "There aren't as many people." },
  { category: "Crowds and Noise", es: "Ahora mucha gente está viniendo, es un poco incómodo.", en: "Now a lot of people are coming, it's a bit uncomfortable." },
  { category: "Crowds and Noise", es: "Deberíamos buscar otro lugar.", en: "We should look for another spot." },
  { category: "Crowds and Noise", es: "Deberíamos alejarnos de la gente.", en: "We should get away from the people. / We should move away from the crowd." },
  { category: "Crowds and Noise", es: "Deberíamos alejarnos del ruido.", en: "We should get away from the noise." },
  { category: "Crowds and Noise", es: "Deberíamos alejarnos de este lugar.", en: "We should get away from this place." },

  // ---------- LEAVING ----------
  { category: "Leaving", es: "Se está haciendo tarde, deberíamos volver.", en: "It's getting late, we should head back. / It's getting late, we should go back." },
  { category: "Leaving", es: "Se está poniendo frío.", en: "It's getting cold." },
  { category: "Leaving", es: "Vamos, es hora de irnos.", en: "Come on, it's time to go. / Let's go, it's time to leave." },
  { category: "Leaving", es: "Volveremos mañana.", en: "We'll come back tomorrow." },
  { category: "Leaving", es: "Suficiente por hoy.", en: "That's enough for today." },
  { category: "Leaving", es: "Tenemos cosas que hacer en casa.", en: "We have things to do at home." },
  { category: "Leaving", es: "No te olvides nada.", en: "Don't forget anything." },
  { category: "Leaving", es: "No dejes nada aquí.", en: "Don't leave anything here." },
  { category: "Leaving", es: "Fue un buen día.", en: "It was a good day." },
  { category: "Leaving", es: "Este parque es gigante.", en: "This park is huge. / This park is enormous." },
  { category: "Leaving", es: "Tiene muchas cosas para hacer.", en: "There's a lot to do. / It has a lot of things to do." },
  { category: "Leaving", es: "Mañana podemos visitar otras partes.", en: "Tomorrow we can visit other parts." },
  { category: "Leaving", es: "Todavía no conocemos todo el parque.", en: "We still don't know the whole park." },
  { category: "Leaving", es: "¿Tomaste fotos?", en: "Did you take photos? / Did you take any pictures?" },
  { category: "Leaving", es: "¿Podés enviarme las fotos?", en: "Can you send me the photos?" },
  { category: "Leaving", es: "Tomame una última foto.", en: "Take one last photo of me. / Take a last picture of me." }
];
