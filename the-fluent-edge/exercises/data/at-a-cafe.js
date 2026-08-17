/*
  AT A CAFÉ — datos del ejercicio
  Cada frase tiene: es (español), en (inglés) y category.
  Si hay más de una traducción natural, se separan con " / ".
*/

window.AT_A_CAFE_DATA = [
  // ---------- RECOMMENDING THE PLACE ----------
  { category: "Recommending the Place", es: "Aquí sirven el mejor café.", en: "They serve the best coffee here." },
  { category: "Recommending the Place", es: "Aquí tienen las mejores tortas.", en: "They have the best cakes here." },
  { category: "Recommending the Place", es: "Esta es la mejor cafetería de la ciudad.", en: "This is the best café in the city. / This is the best coffee shop in town." },
  { category: "Recommending the Place", es: "Siempre vengo a esta cafetería a desayunar.", en: "I always come to this café for breakfast." },
  { category: "Recommending the Place", es: "Puedes desayunar por poco dinero.", en: "You can have breakfast for little money. / You can get breakfast cheap." },

  // ---------- GETTING A TABLE ----------
  { category: "Getting a Table", es: "Buenas tardes, una mesa para dos por favor.", en: "Good afternoon, a table for two please." },
  { category: "Getting a Table", es: "Esa por favor.", en: "That one please." },
  { category: "Getting a Table", es: "Esta por favor.", en: "This one please." },
  { category: "Getting a Table", es: "¿Está esa mesa libre?", en: "Is that table free? / Is that table available?" },
  { category: "Getting a Table", es: "¿Podemos movernos a otra mesa?", en: "Can we move to another table?" },
  { category: "Getting a Table", es: "Esta es muy pequeña.", en: "This one is too small." },
  { category: "Getting a Table", es: "Vamos a esa.", en: "Let's go to that one." },

  // ---------- ORDERING DRINKS ----------
  { category: "Ordering Drinks", es: "Quiero un café negro sin azúcar.", en: "I want a black coffee with no sugar. / I'll have a black coffee, no sugar." },
  { category: "Ordering Drinks", es: "Ella quiere un café con leche.", en: "She wants a coffee with milk. / She'll have a latte. / She wants a white coffee." },
  { category: "Ordering Drinks", es: "Grande.", en: "Large. / A large one." },
  { category: "Ordering Drinks", es: "Quiero un café para llevar.", en: "I want a coffee to go. / I'll have a coffee to take away." },
  { category: "Ordering Drinks", es: "Esto es para llevar, no podemos quedarnos.", en: "This is to go, we can't stay. / This is takeaway, we can't stay." },
  { category: "Ordering Drinks", es: "Para tomar acá.", en: "For here. / To have here." },
  { category: "Ordering Drinks", es: "Un café para tomar acá.", en: "A coffee for here. / A coffee to have here." },
  { category: "Ordering Drinks", es: "¿Puedes traerme un vaso de agua también por favor?", en: "Can you bring me a glass of water too please?" },
  { category: "Ordering Drinks", es: "Dejalo ahí, gracias.", en: "Leave it there, thanks. / Just leave it there, thank you." },

  // ---------- ORDERING FOOD ----------
  { category: "Ordering Food", es: "Mozo, el menú por favor.", en: "Waiter, the menu please." },
  { category: "Ordering Food", es: "Estamos listos para ordenar.", en: "We're ready to order." },
  { category: "Ordering Food", es: "Quiero ver el menú.", en: "I want to see the menu. / Can I see the menu?" },
  { category: "Ordering Food", es: "¿Puede tomar nuestra orden?", en: "Can you take our order?" },
  { category: "Ordering Food", es: "Queremos el desayuno número 2, para comer acá.", en: "We want breakfast number 2, for here." },
  { category: "Ordering Food", es: "Queremos desayunar con facturas.", en: "We want to have breakfast with pastries. / We want breakfast with facturas." },
  { category: "Ordering Food", es: "¿Tienes facturas?", en: "Do you have pastries? / Do you have facturas?" },
  { category: "Ordering Food", es: "Quiero dos medialunas con una taza de café.", en: "I want two croissants with a cup of coffee. / I'll have two medialunas with a cup of coffee." },
  { category: "Ordering Food", es: "¿Cuánto están las medialunas?", en: "How much are the croissants? / How much are the medialunas?" },
  { category: "Ordering Food", es: "Él quiere una tostada con manteca.", en: "He wants toast with butter." },
  { category: "Ordering Food", es: "Ella quiere una porción de torta.", en: "She wants a slice of cake." },
  { category: "Ordering Food", es: "Trae una porción para mí también.", en: "Bring a slice for me too. / I'll have a slice too." },
  { category: "Ordering Food", es: "Pero sin crema.", en: "But without cream. / No cream." },
  { category: "Ordering Food", es: "Para los niños un jugo de naranja y un sándwich de jamón y queso.", en: "For the kids, an orange juice and a ham and cheese sandwich." },
  { category: "Ordering Food", es: "Me gustaría probar la tarta de manzana.", en: "I'd like to try the apple pie. / I'd like to try the apple tart." },
  { category: "Ordering Food", es: "La tarta de manzana está deliciosa.", en: "The apple pie is delicious. / The apple tart is delicious." },

  // ---------- DURING THE MEAL ----------
  { category: "During the Meal", es: "Necesitamos otra servilleta por favor.", en: "We need another napkin please." },
  { category: "During the Meal", es: "¿Puedo tomar esta servilleta?", en: "Can I take this napkin?" },
  { category: "During the Meal", es: "El café necesita más azúcar.", en: "The coffee needs more sugar." },
  { category: "During the Meal", es: "Está amargo.", en: "It's bitter." },
  { category: "During the Meal", es: "El café está demasiado dulce.", en: "The coffee is too sweet." },

  // ---------- THE BILL ----------
  { category: "The Bill", es: "Moza, la cuenta por favor.", en: "Waitress, the check please. / Miss, the bill please." },
  { category: "The Bill", es: "¿Cuánto es?", en: "How much is it?" },
  { category: "The Bill", es: "No te preocupes, yo pago hoy.", en: "Don't worry, I'll pay today." },
  { category: "The Bill", es: "Vos pagás la próxima vez.", en: "You pay next time." },
  { category: "The Bill", es: "Disculpe, hay un error en la cuenta, nosotros no ordenamos eso.", en: "Excuse me, there's a mistake on the bill, we didn't order that." },
  { category: "The Bill", es: "Comimos 3 facturas, no 4.", en: "We had 3 pastries, not 4. / We ate 3 facturas, not 4." },
  { category: "The Bill", es: "Bebimos 2 cafés, no 3.", en: "We had 2 coffees, not 3." },
  { category: "The Bill", es: "Todo salió $50.", en: "Everything came to $50. / The total was $50." },
  { category: "The Bill", es: "El desayuno salió $30.", en: "Breakfast came to $30." },
  { category: "The Bill", es: "Podés desayunar por $20 en otros lugares.", en: "You can have breakfast for $20 in other places." },

  // ---------- FEEDBACK ----------
  { category: "Feedback", es: "Todo estaba delicioso.", en: "Everything was delicious." },
  { category: "Feedback", es: "Y no es tan caro.", en: "And it's not that expensive." },
  { category: "Feedback", es: "Deberíamos volver mañana otra vez.", en: "We should come back again tomorrow." }
];
