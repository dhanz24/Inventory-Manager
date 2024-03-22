import React from 'react';
import Navbar from '../Navbar'
import { LayoutDashboard, Archive, StickyNote, Flag, Boxes, LifeBuoy} from "lucide-react";
import Sidebar, { SidebarItem } from "../Sidebar"
import DashboardPage from '../page/DashboardPage';
import BarangPage from '../page/BarangPage';
import StokPage from '../page/StokPage';
import { DataProvider } from '../context/DataContext';


import { useDashboard } from '../context/DashboardContext';

//routing untuk berpindah konten komponen pada satu halaman
  const PageContent = () => {
    const { activePage } = useDashboard();

    switch(activePage) {
      case 'Dashboard':
        return <DashboardPage />;
      case 'Barang':
        return <BarangPage />;
      case 'Manajemen Stok':
        return <StokPage />;
      default:
        return <DashboardPage />;
    }
  };

const DashboardLayout = () => {
  const { activePage } = useDashboard();

    return (
    <main className='flex '>
  
      <Sidebar className='z-40'>
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" pageName="Dashboard" active={activePage === 'Dashboard'} />
        <SidebarItem icon={<Archive size={20} />} text="Barang" pageName="Barang" active={activePage === "Barang"}/>
        <SidebarItem icon={<Boxes size={20} />} text="Manajemen Stok" pageName="Manajemen Stok" active={activePage === "Manajemen Stok"}/>
        <SidebarItem icon={<StickyNote size={20} />} text="Laporan" active={activePage === "Laporan"}/>
        
        <hr className="my-3" />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        <SidebarItem icon={<Flag size={20} />} text="Reporting" />
      </Sidebar>

      <div className='flex flex-col flex-1 mt-1.5'>
        <Navbar />

        {/* contentnya disini*/}
        <DataProvider><PageContent /></DataProvider>

      </div>
    
    </main>
    );
};

export default DashboardLayout;