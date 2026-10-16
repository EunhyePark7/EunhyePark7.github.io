import useMediaQuery from '@/hooks/useMediaQuery';
import useGlobalStore from '@/stores';
import { media } from '@/styles/media';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import ContextMenu from './ContextMenu';
import ActionIcon from './ActionIcon';

const Header = () => {
  const isOverlay = useMediaQuery(media.tablet);
  const toggleNav = useGlobalStore((state) => state.toggleNav);
  const toggleOverlayNav = useGlobalStore((state) => state.toggleOverlayNav);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('q') || '');
  const searchRef = useRef(null);
  useEffect(() => {
    setSearch(searchParams.get('q') || '');
  }, [searchParams]);
  const submitSearch = (event) => {
    event.preventDefault();
    navigate(search.trim() ? `/?q=${encodeURIComponent(search.trim())}` : '/');
  };
  return (
    <header className="site-header">
      <div className="header-brand">
        <button
          className="menu-button"
          aria-label="메뉴 열기 또는 접기"
          onClick={isOverlay ? toggleOverlayNav : toggleNav}
        >
          <span />
          <span />
          <span />
        </button>
        <Link to="/" className="brand-link" aria-label="Eunhye 포트폴리오 홈">
          <span className="brand-play" aria-hidden="true">
            ▶
          </span>
          <strong>
            Eunhye<span>folio</span>
          </strong>
          <sup>KR</sup>
        </Link>
      </div>
      <form className="header-search" role="search" onSubmit={submitSearch}>
        <input
          ref={searchRef}
          type="search"
          aria-label="프로젝트 검색"
          placeholder="어떤 작업이 궁금하세요?"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button
          aria-label="검색"
          type="submit"
          onClick={(event) => {
            if (window.matchMedia(media.mobile).matches && !search.trim()) {
              event.preventDefault();
              searchRef.current?.focus();
            }
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="m16 16 5 5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </form>
      <div className="header-right">
        <a href="mailto:eungkong333@gmail.com" className="header-contact">
          Let's talk <ActionIcon name="chat" />
        </a>
        <ContextMenu />
      </div>
    </header>
  );
};

export default Header;
