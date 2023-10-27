// json
const characters = [
    {
      "Name": "Annabelle",
      "Traits": "creepy, sinister, doll-like",
      "ImagePath": "/images/Annabelle2.jpg",
      "Count": "0, 0, 0"
    },
    {
      "Name": "Assembly Code",
      "Traits": "impossible, impossible, impossible",
      "ImagePath": "/images/Assembly.jpg"
    },
    {
      "Name": "Bloater",
      "Traits": "grotesque, cannibalistic, inhuman",
      "ImagePath": "/images/Bloater1.jpg"
    },
    {
      "Name": "Carrie White",
      "Traits": "tormented, dangerous, violent",
      "ImagePath": "/images/CarrieWhite.jpg"
    },
    {
      "Name": "Carnage",
      "Traits": "sadistic, chaotic, carnivorous",
      "ImagePath": "/images/Carnage1.jpg"
    },
    {
      "Name": "Chucky",
      "Traits": "sinister, violent, doll-like",
      "ImagePath": "/images/Chucky.jpg"
    },
    {
      "Name": "Fiddlesticks",
      "Traits": "savage, bizarre, chaotic",
      "ImagePath": "/images/Fiddlesticks.jpg"
    },
    {
      "Name": "Ghostface",
      "Traits": "stealthy, sadistic, faceless",
      "ImagePath": "/images/Ghostface.jpg"
    },
    {
      "Name": "Godzilla",
      "Traits": "destructive, colossal, carnivorous",
      "ImagePath": "/images/Godzilla.jpg"
    },
    {
      "Name": "Hannibal Lecter",
      "Traits": "cunning, cannibalistic, unconventionally attractive",
      "ImagePath": "/images/HannibalLecter.jpg"
    },
    {
      "Name": "Jason Voorhees",
      "Traits": "unconventionally attractive, faceless, dangerous",
      "ImagePath": "/images/JasonVoohees.jpg"
    },
    {
      "Name": "Joker",
      "Traits": "maniacal, chaotic, unpredictable",
      "ImagePath": "/images/Joker1.jpg"
    },
    {
      "Name": "Lady Dimitrescu",
      "Traits": "seductive, elegant, unconventionally attractive",
      "ImagePath": "/images/LadyDimitrescu1.jpg"
    },
    {
      "Name": "Laura",
      "Traits": "creepy, mysterious, unconventionally attractive",
      "ImagePath": "/images/Laura1.jpg"
    },
    {
      "Name": "Mel Jones",
      "Traits": "obsessive, cunning, doll-like",
      "ImagePath": "/images/MelJones.jpg"
    },
    {
      "Name": "Michael Myers",
      "Traits": "faceless, silent, violent",
      "ImagePath": "/images/MichaelMyers1.jpg"
    },
    {
      "Name": "Mileena",
      "Traits": "deceptive, savage, unconventionally attractive",
      "ImagePath": "/images/Mileena.jpg"
    },
    {
      "Name": "Mister Babadook",
      "Traits": "sinister, haunting, creepy",
      "ImagePath": "/images/MisterBabadook.jpg"
    },
    {
      "Name": "Patrick Bateman",
      "Traits": "psychopathic, narcissistic, unconventionally attractive",
      "ImagePath": "/images/PatrickBateman.jpg"
    },
    {
      "Name": "Pennywise",
      "Traits": "terrifying, clownish, violent",
      "ImagePath": "/images/Pennywise1.jpg"
    },
    {
      "Name": "Pyramid Head",
      "Traits": "torturous, unconventionally attractive, metallic",
      "ImagePath": "/images/PyramidHead.jpg"
    },
    {
      "Name": "Ryomen Sakuna",
      "Traits": "demonic, cursed, violent",
      "ImagePath": "/images/RyomenSakuna1.jpg"
    },
    {
      "Name": "Samara Moran",
      "Traits": "vengeful, demonic, hairy",
      "ImagePath": "/images/SamaraMorgan1.jpg"
    },
    {
      "Name": "Slender Man",
      "Traits": "faceless, inhuman, elusive",
      "ImagePath": "/images/SlenderMan.jpg"
    },
    {
      "Name": "The Lady",
      "Traits": "unconventionally attractive, giant, inhuman",
      "ImagePath": "/images/TheLady.jpg"
    },
    {
      "Name": "The Predator",
      "Traits": "ruthless, violent, inhuman",
      "ImagePath": "/images/ThePredator.jpg"
    },
    {
      "Name": "The Xenomorph",
      "Traits": "parasitic, dangerous, inhuman",
      "ImagePath": "/images/TheXenomorph1.jpg"
    },
    {
      "Name": "Toy Chica",
      "Traits": "animatronic, dangerous, doll-like",
      "ImagePath": "/images/ToyChica.jpg"
    },
    {
      "Name": "Vecna",
      "Traits": "cursed, deceptive, unconventionally attractive",
      "ImagePath": "/images/Vecna1.jpg"
    }
]

// nextCharacter
function getNextCharacter(index) {
    if (index < 0 || index >= characters.length) {
        return null; // Index out of bounds
      }
    
    const character = characters[index];
    index = (index + 1) % characters.length; // Increment index and wrap around if needed

    console.log(index);

    return {
        name: character.Name,
        imagePath: character.ImagePath
    };
}

// smash
function pressSmash(index) {
    if (index < 0 || index >= characters.length) {
        console.log("Invalid character index.");
        return;
    }
    
    const character = characters[index];

    // Increment each trait and the count for the character
    for (let i = 0; i < 3; i++) {
        character.Count[i]++;
    }
}

// pass
function pressPass(index) {
    if (index < 0 || index >= characters.length) {
        console.log("Invalid character index.");
        return;
    }
}

// getTopTraits
function getTopTraits(characters) {
    const traitCounts = {};

    // Iterate through all characters to update trait counts
  characters.forEach((character) => {
    character.Traits.forEach((trait, index) => {
    // Initialize the count if the trait is not in the object
    if (!traitCounts[trait]) {
        traitCounts[trait] = 0;
    }
    // Increment the count based on the character's count for this trait
    traitCounts[trait] += character.Count[index];
    });
  });

    // Convert the trait counts object into an array of objects
    const traitsArray = Object.keys(traitCounts).map((trait) => ({
        trait: trait,
        count: traitCounts[trait],
    }));

    // Sort the array in descending order of count
    traitsArray.sort((a, b) => b.count - a.count);

    // Take the top three traits with the highest counts
    const topThreeTraits = traitsArray.slice(0, 3);

    // Extract only the trait names (adjectives) and return them
    const topAdjectives = topThreeTraits.map((traitObj) => traitObj.trait);

    return topAdjectives;
}