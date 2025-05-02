document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('content');
    const navItems = document.querySelectorAll('nav ul li');
  
    navItems.forEach(item => {
      item.addEventListener('click', function () {
        navItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        const section = this.getAttribute('data-section');
        loadSection(section);
      });
    });
  
    function loadSection(section) {
      switch (section) {
        case 'menus':
          content.innerHTML = getMenuCards();
          break;
  
        case 'add-menu':
          content.innerHTML = `
            <h2>Add Menu Item</h2>
            <form>
              <input type="text" placeholder="Item Name" required />
              <input type="number" placeholder="Price (Rs)" required />
              <label>Upload Image:</label>
              <input type="file" accept="image/*" required />
              <button type="submit">Add Item</button>
            </form>
          `;
          break;
  
        case 'today-menu':
          content.innerHTML = `
            <h2>Today's Menu</h2>
            <form>
              <input type="text" placeholder="Item Name" required />
              <button type="submit">Add to Today’s Menu</button>
            </form>
          `;
          break;
  
        case 'update-menu':
          content.innerHTML = `
            <h2>Update Menu</h2>
            <form>
              <input type="text" placeholder="Existing Item Name" required />
              <input type="text" placeholder="New Item Name" />
              <input type="number" placeholder="New Price (Rs)" />
              <label>Upload New Image (optional):</label>
              <input type="file" accept="image/*" />
              <button type="submit">Update Item</button>
            </form>
          `;
          break;
  
        case 'orders':
          content.innerHTML = `
            <h2>Incoming Orders</h2>
            ${getOrderCard("Order #1234", "Noodles x2, Tea x1", "Pending")}
            ${getOrderCard("Order #1235", "Pizza x1, Ice Tea x2", "In Progress")}
          `;
          break;
  
        case 'history':
          content.innerHTML = `
            <h2>Order History</h2>
            ${getOrderCard("Order #1020", "Pohe x1, Sandwich x1", "Delivered", true)}
            ${getOrderCard("Order #1021", "Samosa x3", "Delivered", true)}
          `;
          break;
  
        case 'users':
          content.innerHTML = `
            <h2>All Users</h2>
            <ul>
              <li>Ravi Sharma - +91 9876543210</li>
              <li>Anjali Mehta - +91 9123456780</li>
              <li>Raj Patel - +91 9988776655</li>
            </ul>
          `;
          break;
  
        case 'popular':
          content.innerHTML = `
            <h2>Popular Items</h2>
            <div class="card-grid">
              ${menuCard("Pizza", "Rs. 80", "images/pizza.jpg")}
              ${menuCard("Ice Tea", "Rs. 15", "images/tea.jpg")}
              ${menuCard("Fried Rice", "Rs. 60", "images/rice.jpg")}
            </div>
          `;
          break;
  
        case 'admins':
          content.innerHTML = `
            <h2>Admins</h2>
            <ul>
              <li>Dhananjay Kuber - admin@canteenhub.com</li>
              <li>Neha Rathi - neha@canteenhub.com</li>
            </ul>
          `;
          break;
      }
    }
  
    function getMenuCards() {
      return `
        <h2>Menus</h2>
        <input type="text" class="search" placeholder="Search..." />
        <div class="card-grid">
          ${menuCard("Noodles", "Rs. 70", "images/noodles.jpg")}
          ${menuCard("Pohe", "Rs. 20", "images/pohe.jpg")}
          ${menuCard("Samosa", "Rs. 25", "images/samosa.jpg")}
          ${menuCard("Pizza", "Rs. 80", "images/pizza.jpg")}
          ${menuCard("Ice Tea", "Rs. 15", "images/tea.jpg")}
          ${menuCard("Sandwich", "Rs. 30", "images/sandwich.jpg")}
          ${menuCard("Fried Rice", "Rs. 60", "images/rice.jpg")}
        </div>
      `;
    }
  
    function menuCard(name, price, image) {
      return `
        <div class="card">
          <img src="${image}" alt="${name}" />
          <div class="favorite">♡</div>
          <div class="info">
            <h3>${name}</h3>
            <p>${price}</p>
          </div>
        </div>
      `;
    }
  
    function getOrderCard(id, items, status, past = false) {
      return `
        <div class="card" style="margin-bottom: 20px;">
          <div class="info">
            <h3>${id}</h3>
            <p>${items}</p>
            <p>Status: <strong>${status}</strong></p>
            ${!past ? '<button>Mark as Delivered</button>' : ''}
          </div>
        </div>
      `;
    }
  
    // Load default section
    loadSection('menus');
  });
  