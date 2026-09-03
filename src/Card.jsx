export function Card({ title, children }) {
  return (
    <div style={{ background: '#231123', color: '#fff', padding: '20px', borderRadius: '15px', maxWidth: '400px', margin: '40px auto', textAlign: 'center' }}>
      <h2 style={{ color: '#ff7eb3', marginTop: 0 }}>{title}</h2>
      <div>
        {children}
      </div>
    </div>
  );
}