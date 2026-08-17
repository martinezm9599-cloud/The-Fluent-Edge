/*
  CAMPING — datos del ejercicio
  Cada frase tiene: es (español), en (inglés) y category.
  Si hay más de una traducción natural, se separan con " / ".
*/

window.CAMPING_DATA = [
  // ---------- PLANNING THE TRIP ----------
  { category: "Planning the Trip", es: "Quiero irme de campamento.", en: "I want to go camping." },
  { category: "Planning the Trip", es: "Nos quedaremos en el medio del bosque.", en: "We'll stay in the middle of the forest. / We'll camp in the middle of the woods." },
  { category: "Planning the Trip", es: "Queremos pasar 3 noches en la montaña.", en: "We want to spend 3 nights in the mountains." },
  { category: "Planning the Trip", es: "Nos quedaremos 2 noches.", en: "We'll stay 2 nights." },
  { category: "Planning the Trip", es: "Será una gran aventura y será divertido.", en: "It'll be a great adventure and it'll be fun." },
  { category: "Planning the Trip", es: "Nuestro lugar de campamento está un poco lejos, tendremos que hacer 2 paradas en el camino.", en: "Our campsite is a bit far, we'll have to make 2 stops on the way." },
  { category: "Planning the Trip", es: "Si nos cansamos, podemos hacer 3 paradas, pero tenemos que llegar antes de las 10.", en: "If we get tired, we can make 3 stops, but we have to arrive before 10." },
  { category: "Planning the Trip", es: "Porque oscurece temprano.", en: "Because it gets dark early." },

  // ---------- WEATHER ----------
  { category: "Weather", es: "Tenemos que chequear el clima.", en: "We have to check the weather." },
  { category: "Weather", es: "Si llueve, tenemos que volver.", en: "If it rains, we have to go back." },
  { category: "Weather", es: "Aunque si está nublado podemos quedarnos.", en: "Even if it's cloudy we can stay." },
  { category: "Weather", es: "Estará soleado.", en: "It'll be sunny." },
  { category: "Weather", es: "Necesitaremos protector solar.", en: "We'll need sunscreen." },
  { category: "Weather", es: "Podemos compartir mi protector solar.", en: "We can share my sunscreen." },
  { category: "Weather", es: "Podría estar frío allá arriba.", en: "It might be cold up there." },
  { category: "Weather", es: "A veces está muy frío allá arriba.", en: "Sometimes it's very cold up there." },
  { category: "Weather", es: "Se pone frío a la noche.", en: "It gets cold at night." },
  { category: "Weather", es: "Se pone oscuro temprano.", en: "It gets dark early." },

  // ---------- GEAR ----------
  { category: "Gear", es: "Tengo todo el equipo necesario.", en: "I have all the necessary gear. / I have all the equipment I need." },
  { category: "Gear", es: "Hay reposeras en mi casa para usar.", en: "There are lounge chairs at my house we can use." },
  { category: "Gear", es: "Yo llevo las reposeras.", en: "I'll bring the lounge chairs." },
  { category: "Gear", es: "Necesitamos varias cosas más, yo no tengo todo.", en: "We need a few more things, I don't have everything." },
  { category: "Gear", es: "Yo tengo algunas cosas.", en: "I have some things." },
  { category: "Gear", es: "Tenemos que comprar el resto.", en: "We have to buy the rest." },
  { category: "Gear", es: "Pero podemos conseguirlas en la tienda.", en: "But we can get them at the store." },
  { category: "Gear", es: "Yo tengo todo el equipo excepto una linterna.", en: "I have all the gear except a flashlight." },
  { category: "Gear", es: "Necesitamos una buena linterna.", en: "We need a good flashlight." },
  { category: "Gear", es: "Empacá ropa extra por las dudas.", en: "Pack extra clothes just in case." },
  { category: "Gear", es: "No te olvides las frazadas.", en: "Don't forget the blankets." },
  { category: "Gear", es: "Necesitaremos un mapa.", en: "We'll need a map." },
  { category: "Gear", es: "Porque a veces me pierdo allá arriba.", en: "Because I sometimes get lost up there." },
  { category: "Gear", es: "Necesitaremos fósforos para encender el fuego a la noche.", en: "We'll need matches to light the fire at night." },

  // ---------- SAFETY ----------
  { category: "Safety", es: "Hay que estar listos si nos perdemos.", en: "We have to be ready if we get lost." },
  { category: "Safety", es: "Cualquiera puede perderse.", en: "Anyone can get lost." },
  { category: "Safety", es: "Es muy fácil perderse en la montaña.", en: "It's very easy to get lost in the mountains." },

  // ---------- FOOD AND PROVISIONS ----------
  { category: "Food and Provisions", es: "Necesitamos muchas provisiones.", en: "We need a lot of supplies. / We need a lot of provisions." },
  { category: "Food and Provisions", es: "Yo puedo llevar las provisiones en mi mochila.", en: "I can carry the supplies in my backpack." },
  { category: "Food and Provisions", es: "Y al menos una olla pequeña para cocinar.", en: "And at least one small pot for cooking." },
  { category: "Food and Provisions", es: "Yo tengo varias ollas para llevar.", en: "I have several pots to bring." },
  { category: "Food and Provisions", es: "Compartiremos los vasos pero cada persona debe llevar cubiertos.", en: "We'll share the cups but each person should bring cutlery. / We'll share the glasses but everyone needs to bring utensils." },
  { category: "Food and Provisions", es: "Los cubiertos son muy importantes.", en: "Cutlery is very important. / Utensils are very important." },
  { category: "Food and Provisions", es: "Yo tengo una parrilla pequeña que será muy útil.", en: "I have a small grill that will be very useful." },
  { category: "Food and Provisions", es: "Podemos hacer un asado en la parrilla.", en: "We can have a barbecue on the grill. / We can cook a barbecue on the grill." },

  // ---------- SLEEPING ----------
  { category: "Sleeping", es: "Necesitamos buenas bolsas de dormir.", en: "We need good sleeping bags." },
  { category: "Sleeping", es: "No podemos dormir en el piso.", en: "We can't sleep on the floor. / We can't sleep on the ground." },
  { category: "Sleeping", es: "Tengo una bolsa de dormir para mí y una para vos.", en: "I have a sleeping bag for me and one for you." },
  { category: "Sleeping", es: "También necesitamos una carpa.", en: "We also need a tent." },
  { category: "Sleeping", es: "Si no tenemos carpa, no importa.", en: "If we don't have a tent, it doesn't matter." },
  { category: "Sleeping", es: "Dormiremos afuera si no hace frío.", en: "We'll sleep outside if it's not cold." },

  // ---------- FIRE ----------
  { category: "Fire", es: "Yo voy a encender el fuego.", en: "I'm going to light the fire." },
  { category: "Fire", es: "Yo voy a encender la fogata.", en: "I'm going to light the campfire." },
  { category: "Fire", es: "La fogata debería estar aquí.", en: "The campfire should be here." },
  { category: "Fire", es: "Necesitamos leña para encender la fogata.", en: "We need firewood to light the campfire." },
  { category: "Fire", es: "Es importante tener leña seca.", en: "It's important to have dry firewood." },
  { category: "Fire", es: "Tal vez podemos cortar algún árbol.", en: "Maybe we can cut down a tree." },
  { category: "Fire", es: "Tal vez encontraremos leña en el piso.", en: "Maybe we'll find firewood on the ground." },

  // ---------- THE CAMPSITE ----------
  { category: "The Campsite", es: "Este es un buen lugar para acampar.", en: "This is a good place to camp." },
  { category: "The Campsite", es: "Quedémonos aquí.", en: "Let's stay here." },
  { category: "The Campsite", es: "Acampemos aquí.", en: "Let's camp here." },
  { category: "The Campsite", es: "No hay señal aquí.", en: "There's no signal here." },
  { category: "The Campsite", es: "No hay internet acá.", en: "There's no internet here." },
  { category: "The Campsite", es: "Estamos desconectados del mundo.", en: "We're disconnected from the world. / We're cut off from the world." },
  { category: "The Campsite", es: "Hay un río cerca para nadar y no hay nadie allí.", en: "There's a river nearby for swimming and there's nobody there." },
  { category: "The Campsite", es: "No hay nadie allí porque está en el medio de la nada.", en: "There's nobody there because it's in the middle of nowhere." },
  { category: "The Campsite", es: "Conozco un buen lugar pero hay que caminar.", en: "I know a good spot but you have to walk. / I know a good place but we have to hike." },
  { category: "The Campsite", es: "Está a 2 km de aquí.", en: "It's 2 km from here." },
  { category: "The Campsite", es: "Está a 5 km de aquí.", en: "It's 5 km from here." }
];
