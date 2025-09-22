// import React from 'react';

// const Departments = () => {
//   const departments = [
//     { name: 'Public Works', staff: 45, budget: '$2.3M', head: 'John Smith' },
//     { name: 'Transportation', staff: 32, budget: '$1.8M', head: 'Sarah Johnson' },
//     { name: 'Parks & Recreation', staff: 28, budget: '$1.2M', head: 'Mike Davis' },
//     { name: 'Public Safety', staff: 67, budget: '$4.1M', head: 'Lisa Wilson' },
//   ];

//   return (
//     <div>
//       <h1 className="section-title">Department Management</h1>
      
//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
//         {departments.map((dept, index) => (
//           <div key={index} className="stat-card">
//             <h3 className="section-title" style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>
//               {dept.name}
//             </h3>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
//               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <span style={{ color: '#6b7280' }}>Department Head:</span>
//                 <span style={{ fontWeight: '500' }}>{dept.head}</span>
//               </div>
//               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <span style={{ color: '#6b7280' }}>Staff Count:</span>
//                 <span style={{ fontWeight: '500' }}>{dept.staff}</span>
//               </div>
//               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <span style={{ color: '#6b7280' }}>Annual Budget:</span>
//                 <span style={{ fontWeight: '500', color: '#16a34a' }}>{dept.budget}</span>
//               </div>
//             </div>
//             <button 
//               style={{
//                 marginTop: '1rem',
//                 width: '100%',
//                 padding: '8px 16px',
//                 backgroundColor: '#3b82f6',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '6px',
//                 cursor: 'pointer'
//               }}
//             >
//               View Details
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Departments;