const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        let volume = 0.5;

       
        const notes = {
            'C': 261.63,
            'C#': 277.18,
            'D': 293.66,
            'D#': 311.13,
            'E': 329.63,
            'F': 349.23,
            'F#': 369.99,
            'G': 392.00,
            'G#': 415.30,
            'A': 440.00,
            'A#': 466.16,
            'B': 493.88
        };

        const whiteKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
        const blackKeys = ['C#', 'D#', null, 'F#', 'G#', 'A#'];
        const keyboardMap = ['a', 's', 'd', 'f', 'g', 'h', 'j'];
        const blackKeyMap = ['w', 'e', null, 't', 'y', 'u'];

        const pianoKeysContainer = document.getElementById('pianoKeys');
        const volumeSlider = document.getElementById('volumeSlider');

        volumeSlider.addEventListener('input', (e) => {
            volume = e.target.value / 100;
        });

        function playNote(frequency) {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.value = frequency;
            oscillator.type = 'sine';

            gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
        }

        function createPiano() {
            whiteKeys.forEach((note, index) => {
                const key = document.createElement('div');
                key.className = 'key white-key';
                key.dataset.note = note;
                
                const label = document.createElement('div');
                label.className = 'key-label';
                label.textContent = keyboardMap[index].toUpperCase();
                key.appendChild(label);

                key.addEventListener('mousedown', () => {
                    playNote(notes[note]);
                    key.classList.add('playing');
                });

                key.addEventListener('mouseup', () => {
                    key.classList.remove('playing');
                });

                key.addEventListener('mouseleave', () => {
                    key.classList.remove('playing');
                });

                pianoKeysContainer.appendChild(key);

               



                if (blackKeys[index]) {
                    const blackKey = document.createElement('div');
                    blackKey.className = 'key black-key';
                    blackKey.dataset.note = blackKeys[index];
                    blackKey.style.left = `${(index + 1) * 52 - 15}px`;

                    const blackLabel = document.createElement('div');
                    blackLabel.className = 'key-label';
                    blackLabel.textContent = blackKeyMap[index].toUpperCase();
                    blackKey.appendChild(blackLabel);

                    blackKey.addEventListener('mousedown', () => {
                        playNote(notes[blackKeys[index]]);
                        blackKey.classList.add('playing');
                    });

                    blackKey.addEventListener('mouseup', () => {
                        blackKey.classList.remove('playing');
                    });

                    blackKey.addEventListener('mouseleave', () => {
                        blackKey.classList.remove('playing');
                    });

                    pianoKeysContainer.appendChild(blackKey);
                }
            });
        }

   
        document.addEventListener('keydown', (e) => {
            const key = e.key.toLowerCase();
            
            const whiteIndex = keyboardMap.indexOf(key);
            if (whiteIndex !== -1) {
                const note = whiteKeys[whiteIndex];
                playNote(notes[note]);
                const keyElement = document.querySelector(`[data-note="${note}"]`);
                if (keyElement) keyElement.classList.add('playing');
            }

            const blackIndex = blackKeyMap.indexOf(key);
            if (blackIndex !== -1 && blackKeys[blackIndex]) {
                const note = blackKeys[blackIndex];
                playNote(notes[note]);
                const keyElement = document.querySelector(`[data-note="${note}"]`);
                if (keyElement) keyElement.classList.add('playing');
            }
        });

        document.addEventListener('keyup', (e) => {
            const key = e.key.toLowerCase();
            
            const whiteIndex = keyboardMap.indexOf(key);
            if (whiteIndex !== -1) {
                const note = whiteKeys[whiteIndex];
                const keyElement = document.querySelector(`[data-note="${note}"]`);
                if (keyElement) keyElement.classList.remove('playing');
            }

            const blackIndex = blackKeyMap.indexOf(key);
            if (blackIndex !== -1 && blackKeys[blackIndex]) {
                const note = blackKeys[blackIndex];
                const keyElement = document.querySelector(`[data-note="${note}"]`);
                if (keyElement) keyElement.classList.remove('playing');
            }
        });

        createPiano();