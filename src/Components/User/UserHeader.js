import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();
  
  React.useEffect(() => {
    if (location.pathname === '/conta') setTitle('Minha Conta');
    if (location.pathname === '/conta/estatisticas') setTitle('Estatísticas');
    if (location.pathname === '/conta/postar') setTitle('Poste Sua Foto');
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader
