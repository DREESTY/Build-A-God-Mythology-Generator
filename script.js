 // Fantasy name generation
        function generateFantasyName() {
            const syllables = [
                'Ny', 'The', 'La', 'Ra', 'Zor', 'Vel', 'Thal', 'Kor', 'Ael', 'Mor',
                'Syl', 'Val', 'Zen', 'Lyr', 'Nyx', 'Ash', 'Dra', 'Mel', 'Ves', 'Keth',
                'Ith', 'Nal', 'Var', 'Zy', 'Quen', 'Rix', 'Gal', 'Wyn', 'Tal', 'Bel',
                'Cyl', 'Jyn', 'Kyl', 'Nex', 'Pyx', 'Syx', 'Vex', 'Zyx', 'Lux', 'Nyx'
            ];
            
            const endings = ['a', 'or', 'ath', 'iel', 'on', 'ara', 'ira', 'una', 'eth', 'ian'];
            
            const nameLength = Math.random() < 0.3 ? 2 : 3;
            let name = '';
            
            for (let i = 0; i < nameLength - 1; i++) {
                name += syllables[Math.floor(Math.random() * syllables.length)];
            }
            
            name += endings[Math.floor(Math.random() * endings.length)];
            
            return name;
        }

        // Generate mythological backstory
        function generateBackstory(traits) {
            const { domain, animal, color, personality, name } = traits;
            
            const beginnings = [
                "In the dawn of creation, when the world was young and wild",
                "From the primordial chaos of the first age",
                "Born from the tears of ancient stars",
                "Emerging from the sacred void between worlds",
                "When the old gods walked among mortals"
            ];
            
            const domainDescriptions = {
                'Storms': 'wielding lightning as threads and thunder as voice',
                'Fire': 'breathing life into dying embers and forging stars',
                'Wisdom': 'whispering secrets of the universe to those who listen',
                'Chaos': 'dancing in the spaces between order and madness',
                'Love': 'weaving hearts together with golden threads of fate',
                'Death': 'guiding souls across the threshold of eternity',
                'Time': 'holding the threads of past and future in divine hands',
                'Nature': 'breathing life into seed and stone alike',
                'War': 'forging destiny in the crucible of conflict',
                'Dreams': 'walking through sleeping minds like moonlit gardens',
                'Sea': 'commanding the tides with ancient songs',
                'Moon': 'painting silver paths across the night sky'
            };
            
            const animalConnections = {
                'Cat': 'Eyes that see through veils of illusion',
                'Raven': 'Wings that carry messages between realms',
                'Snake': 'Wisdom coiled in ancient knowledge',
                'Deer': 'Grace that moves through sacred forests',
                'Lion': 'Heart that roars with divine authority',
                'Owl': 'Vision that pierces the deepest darkness',
                'Wolf': 'Spirit that howls to distant moons',
                'Dragon': 'Power that sleeps in mountain hearts',
                'Phoenix': 'Soul reborn in eternal flames',
                'Eagle': 'Flight that soars beyond mortal reach',
                'Fox': 'Cunning that outsmarts fate itself',
                'Bear': 'Strength that shakes the foundations of earth'
            };
            
            const personalityTraits = {
                'Kind': 'bestowing blessings upon the worthy and comfort to the suffering',
                'Fierce': 'striking down those who dare oppose the natural order',
                'Mysterious': 'appearing only to those who seek with pure intent',
                'Wise': 'speaking in riddles that unlock ancient truths',
                'Chaotic': 'bringing change to stagnant worlds',
                'Calm': 'bringing peace to turbulent souls',
                'Vengeful': 'remembering every slight across countless ages',
                'Benevolent': 'watching over creation with tender care',
                'Cunning': 'weaving plots that span millennia',
                'Noble': 'standing as beacon of honor in dark times',
                'Wild': 'refusing the chains of civilization',
                'Ancient': 'remembering the songs of creation itself'
            };

            const beginning = beginnings[Math.floor(Math.random() * beginnings.length)];
            const domainDesc = domainDescriptions[domain] || 'wielding powers beyond mortal comprehension';
            const animalDesc = animalConnections[animal] || 'Spirit bonded with sacred beasts';
            const personalityDesc = personalityTraits[personality] || 'moving with divine purpose';

            return `${beginning}, arose ${name}, the ${personality} deity of ${domain}. ${animalDesc}, and robes of deepest ${color.toLowerCase()}, ${name} walks between worlds, ${domainDesc}. Through ages uncounted, this divine being has watched over creation, ${personalityDesc}. Mortals who encounter ${name} speak of ${color.toLowerCase()} light that seems to dance with otherworldly intelligence, and the presence of ${animal.toLowerCase()}s that appear as harbingers of divine will.`;
        }

        // Generate god title
        function generateTitle(traits) {
            const { domain, animal, personality } = traits;
            
            const titleFormats = [
                `The ${personality} ${animal} of ${domain}`,
                `${personality} Keeper of ${domain}`,
                `The ${animal} Who Rules ${domain}`,
                `${personality} Guardian of the ${domain}`,
                `The ${domain} ${animal}`,
                `${personality} Lord/Lady of ${domain}`,
                `The ${animal}-Born ${domain} Deity`
            ];
            
            let title = titleFormats[Math.floor(Math.random() * titleFormats.length)];
            
            // Handle gender-neutral titles
            title = title.replace('Lord/Lady', Math.random() < 0.5 ? 'Lord' : 'Lady');
            
            return title;
        }

        // Display god profile
        function displayGodProfile(profile) {
            const resultContainer = document.getElementById('result');
            
            const profileHTML = `
                <div class="god-profile">
                    <h2 class="god-name">${profile.name}</h2>
                    <p class="god-title">${profile.title}</p>
                    
                    <div class="god-details">
                        <div class="detail-item">
                            <div class="detail-label">⚡ Domain</div>
                            <div class="detail-value">${profile.traits.domain}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">🦅 Sacred Animal</div>
                            <div class="detail-value">${profile.traits.animal}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">🎨 Divine Color</div>
                            <div class="detail-value">${profile.traits.color}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">✨ Nature</div>
                            <div class="detail-value">${profile.traits.personality}</div>
                        </div>
                    </div>
                    
                    <div class="god-story">
                        <h3 class="story-title">📜 Divine Chronicle</h3>
                        <p class="story-text">${profile.story}</p>
                    </div>
                </div>
            `;
            
            resultContainer.innerHTML = profileHTML;
            
            // Scroll to result
            resultContainer.scrollIntoView({ behavior: 'smooth' });
        }

        // Main function to summon god
        function summonGod() {
            const domain = document.getElementById('domain').value;
            const animal = document.getElementById('animal').value;
            const color = document.getElementById('color').value;
            const personality = document.getElementById('personality').value;
            
            if (!domain || !animal || !color || !personality) {
                alert('Please select all traits to summon your deity!');
                return;
            }
            
            const traits = { domain, animal, color, personality };
            const name = generateFantasyName();
            const title = generateTitle(traits);
            const story = generateBackstory({ ...traits, name });
            
            const profile = {
                name,
                title,
                traits,
                story
            };
            
            displayGodProfile(profile);
        }

        // Reset form function
        function resetForm() {
            document.getElementById('domain').value = '';
            document.getElementById('animal').value = '';
            document.getElementById('color').value = '';
            document.getElementById('personality').value = '';
            document.getElementById('result').innerHTML = '';
        }

        // Add enter key support
        document.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                summonGod();
            }
        });