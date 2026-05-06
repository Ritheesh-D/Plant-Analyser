import { supabase } from "./supabase.js";
console.log("Script loaded");

async function getPlantDetails(plantName) {
    const { data, error } = await supabase
        .from("plants")
        .select("*")
        .ilike("name", `%${plantName}%`)
        .single();

    if (error) {
        console.log("Error fetching data:", error);
        return null;
    }

    return data;
}

getPlantDetails("Neem").then(data => {
    console.log(data);
});

async function simulateScan() {
    document.querySelector('.scan-actions').classList.add('hidden');

    const progress = document.getElementById('scan-progress');
    progress.classList.remove('hidden');

    setTimeout(async () => {
        progress.classList.add('hidden');
        document.querySelector('.scan-actions').classList.remove('hidden');

        const fileInput = document.getElementById('image-upload');
        let plantName = "Neem";

        if (fileInput.files.length > 0) {
            const fileName = fileInput.files[0].name.toLowerCase();

            if (fileName.includes("neem")) plantName = "Neem";
            else if (fileName.includes("aloe")) plantName = "Aloe Vera";
            else if (fileName.includes("tulsi")) plantName = "Tulsi";
        }

        const data = await getPlantDetails(plantName);

        if (data) {
            showResult(data);
        } else {
            alert("Plant not found in database");
        }

    }, 2000);
}

function showResult(plant) {
    document.getElementById("result-name").textContent = plant.name;
    document.getElementById("result-scientific").textContent = plant.scientific_name;
    document.getElementById("result-uses").textContent = plant.herbal_uses;
    document.getElementById("result-medicine").textContent = plant.medicinal_uses;

    navigateTo('result-view');
}
