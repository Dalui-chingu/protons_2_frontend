import React, { useEffect, useState } from 'react';

const BackButton = () => {
  const [previousPage, setPreviousPage] = useState(null);

  useEffect(() => {
    const handlePopstate = () => {
      setPreviousPage(document.referrer);
    };

    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  const goBack = () => {
    if (previousPage) {
      window.location.href = previousPage;
    } else
     {
      // Fallback: go back in browser history
    window.history.back();
    history.push('/home');
    }
  };

  return (
    <button
      style={{
        position: 'fixed',
        zIndex:'100',
        top: '20px',
        left: '20px',
        padding: '15px 20px',
        borderRadius: '30px',
        backgroundColor: 'black',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
      }}
      onClick={goBack}
    >
        <span style={{ marginRight: '5px' }}>&#9666;</span>
      Back
    </button>
  );
};

export default BackButton;