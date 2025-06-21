import { useState } from 'react';

function DownloadDropdownButton({ onDownload1, onDownload2 }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block group" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="uiverse-download-btn button flex flex-col items-center justify-center gap-2 text-2xl px-10 py-5" style={{ minWidth: '220px', minHeight: '64px', fontFamily: 'Special Gothic Expanded One, Nunito, Arial, Helvetica, sans-serif', fontWeight: 800 }}>
        <svg className="saveicon mx-auto" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" strokeLinejoin="round" strokeLinecap="round"></path>
        </svg>
        <span className="block w-full text-center" style={{ fontFamily: 'Special Gothic Expanded One, Nunito, Arial, Helvetica, sans-serif', fontWeight: 800 }}>Download Resources</span>
      </button>
      <div className={`absolute left-1/2 -translate-x-1/2 mt-2 flex flex-row gap-4 z-50 transition-all duration-300 ${open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`} style={{ minWidth: 'unset' }}>
        <button className="uiverse-dropdown-btn" onClick={onDownload1}>Download<br/>Handbook</button>
        <button className="uiverse-dropdown-btn" onClick={onDownload2}>Download<br/>Rulebook</button>
      </div>
    </div>
  );
}

export default DownloadDropdownButton;
