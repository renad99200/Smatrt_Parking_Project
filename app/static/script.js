function updateDashboard(data) {
  document.getElementById('available-count').innerText = `Available spaces: ${data.available}`;
  document.getElementById('occupied-count').innerText = `Occupied spaces: ${data.occupied}`;
}

let lastOpened = null;

function showInfo(type) {
  const boxes = {
    available: document.getElementById('available-details'),
    occupied: document.getElementById('occupied-details')
  };
} 