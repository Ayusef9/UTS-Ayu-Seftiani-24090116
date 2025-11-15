// HALAMAN LOGIN 
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const errorMessage = document.getElementById('errorMessage');
        
        // Reset error message
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';
        
        // Validasi input
        if (!email || !password) {
            errorMessage.textContent = 'Email dan Password tidak boleh kosong!';
            errorMessage.style.display = 'block';
            return;
        }
        
        // Login berhasil
        alert('Login berhasil!');
        window.location.href = 'dashboard.html';
    });
}

// HALAMAN DASHBOARD
const totalProductsEl = document.getElementById('totalProducts');
if (totalProductsEl) {
    window.addEventListener('DOMContentLoaded', function() {
        const summary = {
            totalProducts: 120,
            totalSales: 85,
            totalRevenue: 12500000
        };

        document.getElementById('totalProducts').textContent = summary.totalProducts;
        document.getElementById('totalSales').textContent = summary.totalSales;
        document.getElementById('totalRevenue').textContent = 
            'Rp ' + summary.totalRevenue.toLocaleString('id-ID');
    });
}

// HALAMAN PRODUCTS
const productsBody = document.getElementById('productsBody');
if (productsBody) {
    const products = [
        { id: 1, name: "Kopi Gayo", price: 25000, stock: 50 },
        { id: 2, name: "Teh Hitam", price: 18000, stock: 30 },
        { id: 3, name: "Coklat Aceh", price: 30000, stock: 20 }
    ];

    function displayProducts() {
        const tbody = document.getElementById('productsBody');
        tbody.innerHTML = '';

        products.forEach((product, index) => {
            const row = document.createElement('tr');
            row.setAttribute('data-id', product.id);
            
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${product.name}</td>
                <td>Rp ${product.price.toLocaleString('id-ID')}</td>
                <td>${product.stock}</td>
                <td class="action-cell">
                    <button class="btn-action btn-edit" onclick="editProduct('${product.name}')" title="Edit">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                    </button>
                    <button class="btn-action btn-delete" onclick="deleteProduct(${product.id})" title="Delete">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                    </button>
                </td>
            `;
            
            tbody.appendChild(row);
        });
    }

    function editProduct(productName) {
        alert('Edit produk: ' + productName);
    }

    function deleteProduct(productId) {
        if (confirm('Yakin hapus produk ini?')) {
            const index = products.findIndex(p => p.id === productId);
            if (index > -1) {
                products.splice(index, 1);
            }
            displayProducts();
        }
    }

    // Panggil fungsi
    displayProducts();
}