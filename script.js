function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("hidden");
}

function setActiveLink() {
  const currentPath = window.location.pathname;
  document.querySelectorAll(".nav-menu-link").forEach((link) => {
    const linkPath = link.getAttribute("href");

    if (
      (currentPath === "/" || currentPath.endsWith("index.html")) &&
      linkPath === "index.html"
    ) {
      link.classList.add("active-link");
    } else if (currentPath.endsWith(linkPath)) {
      link.classList.add("active-link");
    }
  });
}

setActiveLink();

const umkmData = [
  {
    name: "Viera Oleh-Oleh Jalan Riau",
    phone: "XXXXXXXXXX",
    category: "Makanan",
    address: "Jl. Pepaya, Jadirejo, Kec. Sukajadi, Kota Pekanbaru",
  },
  {
    name: "Malika Lapan Oleh-Oleh",
    phone: "XXXXXXXXXX",
    category: "Makanan",
    address: "Jl. Paus, Limbungan Baru, Kec. Rumbai Pesisir, Kota Pekanbaru",
  },
  {
    name: "RUMAH KUE VIERA (Ketan Talam Durian)",
    phone: "XXXXXXXXXX",
    category: "Makanan",
    address: "Jalan Bina Widya No.2, Simpang Baru, Kec. Tampan, Kota Pekanbaru",
  },
  {
    name: "Maifin's Oleh Oleh Pekanbaru",
    phone: "XXXXXXXXXX",
    category: "Makanan",
    address:
      "Jl. Arifin Ahmad, Sidomulyo Tim., Kec. Marpoyan Damai, Kota Pekanbaru",
  },
  {
    name: "Lekeix Rumah Kue Lapis Oleh oleh Khas Pekanbaru",
    phone: "XXXXXXXXXX",
    category: "Makanan",
    address:
      "Jl. Sumatera No.68, Simpang Empat, Kec. Pekanbaru Kota, Kota Pekanbaru",
  },
  {
    name: "Gerai Oleh Oleh Feandra Cake",
    phone: "XXXXXXXXXX",
    category: "Makanan",
    address: "Jl. Pepaya, Jadirejo, Kec. Sukajadi, Kota Pekanbaru",
  },
];

function renderTable() {
  const tableBody = document.getElementById("umkmTableBody");
  tableBody.innerHTML = "";

  umkmData.forEach((umkm) => {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td class="border-b p-4">${umkm.name}</td>
            <td class="border-b p-4">${umkm.phone}</td>
            <td class="border-b p-4">${umkm.category}</td>
            <td class="border-b p-4">${umkm.address}</td>
          `;

    tableBody.appendChild(row);
  });
}

renderTable();
