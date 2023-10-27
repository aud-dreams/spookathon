// json
const characters = [
    {
        "Name": "Annabelle",
        "Traits": "creepy, sinister, doll-like",
        "ImagePath": "images/Anabelle2.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "Assembly Code",
        "Traits": "impossible, impossible, impossible",
        "ImagePath": "images/Assembly.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "Bloater",
        "Traits": "grotesque, cannibalistic, inhuman",
        "ImagePath": "images/Bloater1.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "Carrie White",
        "Traits": "tormented, dangerous, violent",
        "ImagePath": "images/CarrieWhite.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "Carnage",
        "Traits": "sadistic, chaotic, carnivorous",
        "ImagePath": "images/Carnage1.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "Chucky",
        "Traits": "sinister, violent, doll-like",
        "ImagePath": "images/Chucky.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "Fiddlesticks",
        "Traits": "savage, bizarre, chaotic",
        "ImagePath": "images/Fiddlesticks.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "Ghostface",
        "Traits": "stealthy, sadistic, faceless",
        "ImagePath": "images/Ghostface.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "Godzilla",
        "Traits": "destructive, colossal, carnivorous",
        "ImagePath": "images/Godzilla.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "Hannibal Lecter",
        "Traits": "cunning, cannibalistic, unconventionally attractive",
        "ImagePath": "images/HannibalLecter.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "Jason Voorhees",
        "Traits": "unconventionally attractive, faceless, dangerous",
        "ImagePath": "images/JasonVoorhees.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "Joker",
        "Traits": "maniacal, chaotic, unpredictable",
        "ImagePath": "images/Joker1.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "Lady Dimitrescu",
        "Traits": "seductive, elegant, unconventionally attractive",
        "ImagePath": "images/LadyDimitrescu1.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "Laura",
        "Traits": "creepy, mysterious, unconventionally attractive",
        "ImagePath": "images/Laura1.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "Mel Jones",
        "Traits": "obsessive, cunning, doll-like",
        "ImagePath": "images/MelJones.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "Michael Myers",
        "Traits": "faceless, silent, violent",
        "ImagePath": "images/MichaelMyers1.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "Mileena",
        "Traits": "deceptive, savage, unconventionally attractive",
        "ImagePath": "images/Mileena.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "Mister Babadook",
        "Traits": "sinister, haunting, creepy",
        "ImagePath": "images/MisterBabadook.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "Patrick Bateman",
        "Traits": "psychopathic, narcissistic, unconventionally attractive",
        "ImagePath": "images/PatrickBateman.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "Pennywise",
        "Traits": "terrifying, clownish, violent",
        "ImagePath": "images/Pennywise1.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "Pyramid Head",
        "Traits": "torturous, unconventionally attractive, metallic",
        "ImagePath": "images/PyramidHead.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "Ryomen Sakuna",
        "Traits": "demonic, cursed, violent",
        "ImagePath": "images/RyomenSakuna1.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "Samara Moran",
        "Traits": "vengeful, demonic, hairy",
        "ImagePath": "images/SamaraMorgan1.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "Slender Man",
        "Traits": "faceless, inhuman, elusive",
        "ImagePath": "images/SlernderMan.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "The Lady",
        "Traits": "unconventionally attractive, giant, inhuman",
        "ImagePath": "images/TheLady.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "The Predator",
        "Traits": "ruthless, violent, inhuman",
        "ImagePath": "images/ThePredator.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "The Xenomorph",
        "Traits": "parasitic, dangerous, inhuman",
        "ImagePath": "images/TheXenomorph1.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "Toy Chica",
        "Traits": "animatronic, dangerous, doll-like",
        "ImagePath": "images/ToyChica.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "Vecna",
        "Traits": "cursed, deceptive, unconventionally attractive",
        "ImagePath": "images/Vecna1.jpg",
        "Count": "0, 0, 0"
    },
    {
        "Name": "Vecna",
        "Traits": "cursed, deceptive, unconventionally attractive",
        "ImagePath": "images/Vecna1.jpg",
        "Count": "0, 0, 0"
    }
]

// nextCharacter
// function getNextCharacter(index) {
//     if (index < 0 || index >= characters.length) {
//         return null; // Index out of bounds
//     }

//     const character = characters[index];
//     index += 1; // Increment index and wrap around if needed

//     return {
//         name: character.Name,
//         imagePath: character.ImagePath,
//         index: index
//     };
// }

// smash
function pressSmash(index) {
    if (index < 0 || index >= characters.length) {
        console.log("Invalid character index.");
        return;
    }

    index += 1;

    const character = characters[index];
    console.log(character);

    // Increment each trait and the count for the character
    for (let i = 0; i < 3; i++) {
        character.Count[i]++;
    }

    return [character, characters[0]];
}

// pass
function pressPass(index) {
    if (index < 0 || index >= characters.length) {
        console.log("Invalid character index.");
        return;
    }

    index += 1;

    const character = characters[index];
    console.log(character);

    // Increment each trait and the count for the character
    for (let i = 0; i < 3; i++) {
        character.Count[i]++;
    }

    return [character, characters[0]];
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