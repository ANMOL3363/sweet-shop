import { useEffect, useState } from 'react';

function Dashboard() {
  const [sweets, setSweets] = useState([]);

   const handlePurchase = async (id) => {
  const token = localStorage.getItem('token');

  try {
    await fetch(`http://localhost:5000/api/sweets/${id}/purchase`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const res = await fetch('http://localhost:5000/api/sweets', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    setSweets(data);
  } catch (error) {
    alert('Purchase failed');
  }
 };




  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch('http://localhost:5000/api/sweets', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setSweets(Array.isArray(data) ? data : []);
      })
      .catch(err => console.error(err));

  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      <hr />

      {sweets.length === 0 ? (
        <p>No sweets available</p>
      ) : (
        <ul>
          {sweets.map((sweet) => (
            
       
 
  <li
  key={sweet._id}
  style={{
    border: '1px solid #ccc',
    padding: '12px',
    marginBottom: '12px',
    borderRadius: '6px',
    maxWidth: '300px',
  }}
  
>

    <h3>Available Sweets</h3>

  <strong>{sweet.name}</strong><br />
  Category: {sweet.category}<br />
  Price: ₹{sweet.price}<br />
  Available: {sweet.quantity}<br /><br />

  <button
    onClick={() => handlePurchase(sweet._id)}
    disabled={sweet.quantity === 0}
    style={{
      padding: '6px 12px',
      backgroundColor: sweet.quantity === 0 ? '#ccc' : '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: sweet.quantity === 0 ? 'not-allowed' : 'pointer',
    }}
  >
    {sweet.quantity === 0 ? 'Out of Stock' : 'Purchase'}
  </button>
</li>
        ))}
        </ul>
      )}
    </div>
  );
}

export default Dashboard;


