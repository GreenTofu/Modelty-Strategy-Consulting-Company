document.addEventListener('DOMContentLoaded', function () {
    const colors = [
        "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure",
        "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet",
        "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate",
        "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan",
        "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGreen",
        "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid",
        "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray",
        "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray",
        "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia",
        "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray",
        "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed",
        "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush",
        "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan",
        "LightGoldenRodYellow", "LightGray", "LightGreen", "LightPink", "LightSalmon",
        "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSteelBlue", "LightYellow",
        "Lime", "LimeGreen", "Linen", "Magenta", "Maroon",
        "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen",
        "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue",
        "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy",
        "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed",
        "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed",
        "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum",
        "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown",
        "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen",
        "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue",
        "SlateGray", "Snow", "SpringGreen", "SteelBlue", "Tan",
        "Teal", "Thistle", "Tomato", "Turquoise", "Violet",
        "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
    ];

    const dropdown = document.getElementById("color-select");

    const ageInput = document.getElementById('age');

    const ageNotification = document.getElementById('ageNotification');
    let timeoutId;

    const colorPreview = document.getElementById('color-preview');

    const form = document.querySelector('form');
    const submittedDiv = document.querySelector('.submitted-data');
    const submittedName = document.getElementById('submitted-name');
    const submittedAge = document.getElementById('submitted-age');
    const submittedColor = document.getElementById('submitted-color');

    function updateColorPreview() {
        const selectedColor = dropdown.value;
        colorPreview.style.backgroundColor = selectedColor;
    }

    window.onload = () => {
        colors.forEach(color => {
            const option = document.createElement("option");
            option.value = color;
            option.innerHTML = color;
            dropdown.appendChild(option);
        });
        colorPreview.style.backgroundColor = dropdown.value;
    };

    // dropdown.value = colors[0].value;
    // updateColorPreview();

    ageInput.addEventListener('input', function () {
        this.value = this.value.replace(/\D/g, '');
        let value = parseInt(this.value);

        if (value < 0 || value > 200) {
            this.value = this.value.slice(0, -1);
            this.classList.add('input-error');
            ageNotification.textContent = value < 0 ? "Age cannot be negative" : "Age cannot exceed 200";
            ageNotification.style.display = 'block';
            ageNotification.style.color = 'red';
            ageNotification.style.marginLeft = '10px';

            if (timeoutId) clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                ageNotification.style.display = 'none';
            }, 3000);
        } else {
            this.classList.remove('input-error');
            ageNotification.style.display = 'none';
        }
    });

    dropdown.addEventListener('change', updateColorPreview);

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const body = document.body;

        submittedName.textContent = document.getElementById('name').value;
        submittedAge.textContent = document.getElementById('age').value;
        submittedColor.textContent = dropdown.value;

        submittedDiv.classList.remove('hidden');
        body.style.backgroundColor = dropdown.value;

    });
});