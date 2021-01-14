import Head from 'next/head'
import Navbar from '../components/Navbar';
import VideoCards from '../components/VideoCards';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div>
    <Navbar />
    <VideoCards />
    </div>
  )
}
