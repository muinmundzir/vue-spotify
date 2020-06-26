<template>
  <div class="flex flex-col h-screen text-sm text-gray-400">
    <div class="flex-1 flex overflow-y-hidden">
      <div class="bg-gray-900-spotify w-40 flex-none flex flex-col justify-between font-semibold">
        <ul class="py-6">
          <li class="border-l-4 border-green-600">
            <a href="#" class="flex items-center mx-4 mt-4 group">
              <svg class="fill-current text-gray-400 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M503.401 228.884l-43.253-39.411V58.79c0-8.315-6.741-15.057-15.057-15.057H340.976c-8.315 0-15.057 6.741-15.057 15.057v8.374l-52.236-47.597c-10.083-9.189-25.288-9.188-35.367-.001L8.598 228.885c-8.076 7.36-10.745 18.7-6.799 28.889 3.947 10.189 13.557 16.772 24.484 16.772h36.689v209.721c0 8.315 6.741 15.057 15.057 15.057h125.913c8.315 0 15.057-6.741 15.057-15.057V356.931H293v127.337c0 8.315 6.741 15.057 15.057 15.057h125.908c8.315 0 15.057-6.741 15.056-15.057V274.547h36.697c10.926 0 20.537-6.584 24.484-16.772 3.945-10.19 1.277-21.53-6.801-28.891zm-69.436 15.549c-8.315 0-15.057 6.741-15.057 15.057v209.721h-95.793V341.874c0-8.315-6.742-15.057-15.057-15.057H203.942c-8.315 0-15.057 6.741-15.057 15.057v127.337h-95.8V259.49c0-8.315-6.741-15.057-15.057-15.057H36.245l219.756-200.24 74.836 68.191a15.061 15.061 0 0016.224 2.644 15.06 15.06 0 008.973-13.774V73.847h74.002v122.276c0 4.237 1.784 8.276 4.916 11.13l40.803 37.18h-41.79z"/></svg>
              <span class="ml-2 group-hover:text-white">Home</span>
            </a>
          </li>
          <li class="border-l-4 border-transparent">
            <a href="#" class="flex items-center mx-4 mt-4 group">
              <svg class="fill-current text-gray-400 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 477.867 477.867"><path d="M421.649 90.317L336.316 4.983a16.871 16.871 0 00-5.564-3.703A17.232 17.232 0 00324.267 0H102.4C74.123 0 51.2 22.923 51.2 51.2v375.467c0 28.277 22.923 51.2 51.2 51.2h273.067c28.277 0 51.2-22.923 51.2-51.2V102.4a17.276 17.276 0 00-5.018-12.083zm-80.316-32.051l27.068 27.068h-27.068V58.266zm51.2 368.401c0 9.426-7.641 17.067-17.067 17.067H102.4c-9.426 0-17.067-7.641-17.067-17.067V51.2c0-9.426 7.641-17.067 17.067-17.067h204.8V102.4c0 9.426 7.641 17.067 17.067 17.067h68.267v307.2z"/></svg>
              <span class="ml-2 group-hover:text-white">Browse</span>
            </a>
          </li>
          <li class="border-l-4 border-transparent">
            <a href="#" class="flex items-center mx-4 mt-4 group">
              <svg class="fill-current text-gray-400 group-hover:text-white" viewBox="0 0 511.982 511.982" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M255.991 169.039c-30.327 0-55 24.673-55 55 0 25.127 16.943 46.356 40 52.904v171.096c0 8.284 6.716 15 15 15s15-6.716 15-15V276.943c23.057-6.547 40-27.777 40-52.904 0-30.327-24.673-55-55-55zm0 80c-13.785 0-25-11.215-25-25s11.215-25 25-25 25 11.215 25 25-11.215 25-25 25zM186.597 143.845c-5.857-5.858-15.354-5.858-21.213 0-46.505 46.503-46.512 121.781 0 168.291 5.859 5.858 15.355 5.858 21.213 0 5.858-5.857 5.858-15.355 0-21.213-34.78-34.779-34.786-91.08 0-125.865 5.858-5.858 5.858-15.356 0-21.213zM346.597 143.845c-5.857-5.857-15.355-5.857-21.213 0s-5.858 15.355 0 21.213c34.701 34.701 34.701 91.164 0 125.865-5.858 5.857-5.858 15.355 0 21.213 5.859 5.858 15.355 5.858 21.213 0 46.399-46.397 46.399-121.894 0-168.291z"/><path d="M141.342 119.803c5.858-5.857 5.858-15.355 0-21.213-5.857-5.857-15.355-5.857-21.213 0-71.352 71.352-71.352 187.449 0 258.801 5.856 5.857 15.354 5.86 21.213 0 5.858-5.857 5.858-15.355 0-21.213-59.654-59.655-59.654-156.72 0-216.375zM391.852 98.59c-5.857-5.857-15.355-5.857-21.213 0s-5.858 15.355 0 21.213c59.654 59.655 59.654 156.72 0 216.375-5.858 5.857-5.858 15.355 0 21.213 5.859 5.858 15.355 5.858 21.213 0 71.352-71.352 71.352-187.449 0-258.801z"/><path d="M96.087 74.548c5.858-5.857 5.858-15.355 0-21.213-5.857-5.857-15.355-5.857-21.213 0-99.941 99.94-99.724 249.587 0 349.311 5.856 5.857 15.354 5.86 21.213 0 5.858-5.857 5.858-15.355 0-21.213-87.475-87.477-87.475-219.408 0-306.885zM437.107 53.335c-5.857-5.857-15.355-5.857-21.213 0s-5.858 15.355 0 21.213c87.477 87.477 87.477 219.408 0 306.885-5.858 5.857-5.858 15.355 0 21.213 5.859 5.858 15.355 5.858 21.213 0 99.94-99.939 99.725-249.587 0-349.311z"/></svg>
              <span class="ml-2 group-hover:text-white">Radio</span>
            </a>
          </li>
        </ul>
        <div class="sidebar-spotify overflow-y-auto px-5 mt-2">
          <h3 class="uppercase tracking-widest text-gray-500 font-normal text-xs">Your Library</h3>
          <ul class="leading-extra-loose">
            <li class="truncate"><a href="#" class="hover:text-white">Made For You</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">Recently Played</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">Liked Songs</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">Albums</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">Artists</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">Podcasts</a></li>
          </ul>
          <h3 class="uppercase tracking-widest text-gray-500 font-normal text-xs mt-2">Playlist</h3>
          <ul class="leading-extra-loose">
            <li class="truncate"><a href="#" class="hover:text-white">Baru</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">Instrumental</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">Slow</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">Your Top Songs 2019</a></li>
          </ul>
        </div>
        <div class="border-t border-gray-800 h-16 px-4 py-2 flex items-center group">
          <svg class="fill-current text-gray-600 w-6 h-6 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.833 0 0 114.833 0 256s114.833 256 256 256 256-114.853 256-256S397.167 0 256 0zm0 472.341c-119.275 0-216.341-97.046-216.341-216.341S136.725 39.659 256 39.659 472.341 136.705 472.341 256 375.295 472.341 256 472.341z"/><path d="M355.148 234.386H275.83v-79.318c0-10.946-8.864-19.83-19.83-19.83s-19.83 8.884-19.83 19.83v79.318h-79.318c-10.966 0-19.83 8.884-19.83 19.83s8.864 19.83 19.83 19.83h79.318v79.318c0 10.946 8.864 19.83 19.83 19.83s19.83-8.884 19.83-19.83v-79.318h79.318c10.966 0 19.83-8.884 19.83-19.83s-8.864-19.83-19.83-19.83z"/></svg>
          <a href="#" class="font-normal text-gray-500 ml-2 group-hover:text-white">New Playlist</a>
        </div>
      </div>
      <div class="bg-gray-800-spotify flex-1 flex flex-col">
        <div class="top-bar flex items-center justify-between px-4 py-2">
          <div class="flex items-center">
            <button>
              <svg class="fill-current text-gray-400 hover:text-white h-8 w-8" viewBox="0 0 24 24" width="24" height="24"><path d="M14.7 15.3a1 1 0 01-1.4 1.4l-4-4a1 1 0 010-1.4l4-4a1 1 0 011.4 1.4L11.42 12l3.3 3.3z"/></svg>
            </button>
            <button class="ml-1">
              <svg class="fill-current text-gray-400 hover:text-white h-8 w-8" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M9.3 8.7a1 1 0 011.4-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.4-1.4l3.29-3.3-3.3-3.3z"/></svg>
            </button>
            <div class="ml-4 relative">
              <input type="text" placeholder="search" class="bg-white text-gray-800 placeholder-gray-800 rounded-full px-3 pl-8 py-1">
              <div class="absolute top-0">
                <svg class="fill-current text-gray-800 h-6 w-6 pt-1 pl-2" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"/></svg>
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <button>
              <svg class="fill-current text-gray-400 hover:text-white w-6 h-6" viewBox="0 0 496 512"><path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"/></svg>
            </button>
            <a href="#" class="ml-2 hover:underline hover:text-white">muinmundzir</a>
            <button class="ml-4">
              <svg class="fill-current text-gray-400 hover:text-white w-6 h-6" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M15.3 9.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4l3.3 3.29 3.3-3.3z"/></svg>
            </button>
          </div>
        </div>
        <div class="overflow-y-auto content-spotify">
          <div class="container mx-auto px-10">
            <h2 class="mt-10 ml-14 text-5xl font-semibold text-white">Home</h2>
            <div class="mt-8 ml-14">
              <h3 class="font-semibold text-xl border-b border-gray-900 pb-2">Recently Played</h3>
              <div class="flex items-center mt-4 -mx-2">
                <div class="w-1/5 px-4">
                  <div><a href="#"><img src="../../static/albumcover02.jpg" alt="album cover"></a></div>
                  <div>
                    <a href="#" class="font-semibold block hover:text-white">Accoustic Pop Covers 2019</a>
                    <div class="text-gray-500 mt-2">Amazing Accoustic Covers updated every weeks.</div>
                    <div class="uppercase tracking-widest text-xs text-gray-500 mt-2">5231 Followers</div>
                  </div>
                </div>
                <div class="w-1/5 px-4">
                  <div><a href="#"><img src="../../static/albumcover06.jpg" alt="album cover"></a></div>
                  <div>
                    <a href="#" class="font-semibold block hover:text-white">Accoustic Pop Covers 2019</a>
                    <div class="text-gray-500 mt-2">Amazing Accoustic Covers updated every weeks.</div>
                    <div class="uppercase tracking-widest text-xs text-gray-500 mt-2">5231 Followers</div>
                  </div>
                </div>
                <div class="w-1/5 px-4">
                  <div><a href="#"><img src="../../static/albumcover04.jpg" alt="album cover"></a></div>
                  <div>
                    <a href="#" class="font-semibold block hover:text-white">Accoustic Pop Covers 2019</a>
                    <div class="text-gray-500 mt-2">Amazing Accoustic Covers updated every weeks.</div>
                    <div class="uppercase tracking-widest text-xs text-gray-500 mt-2">5231 Followers</div>
                  </div>
                </div>
                <div class="w-1/5 px-4">
                  <div><a href="#"><img src="../../static/albumcover05.jpg" alt="album cover"></a></div>
                  <div>
                    <a href="#" class="font-semibold block hover:text-white">Accoustic Pop Covers 2019</a>
                    <div class="text-gray-500 mt-2">Amazing Accoustic Covers updated every weeks.</div>
                    <div class="uppercase tracking-widest text-xs text-gray-500 mt-2">5231 Followers</div>
                  </div>
                </div>
                <div class="w-1/5 px-4">
                  <div><a href="#"><img src="../../static/albumcover03.jpg" alt="album cover"></a></div>
                  <div>
                    <a href="#" class="font-semibold block hover:text-white">Accoustic Pop Covers 2019</a>
                    <div class="text-gray-500 mt-2">Amazing Accoustic Covers updated every weeks.</div>
                    <div class="uppercase tracking-widest text-xs text-gray-500 mt-2">5231 Followers</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-8 ml-14">
              <h3 class="font-semibold text-xl border-b border-gray-900 pb-2">Your Heavy Rotation</h3>
              <div class="flex items-center mt-4 -mx-2">
                <div class="w-1/5 px-4">
                  <div><a href="#"><img src="../../static/albumcover04.jpg" alt="album cover"></a></div>
                  <div>
                    <a href="#" class="font-semibold block hover:text-white">Accoustic Pop Covers 2019</a>
                    <div class="text-gray-500 mt-2">Amazing Accoustic Covers updated every weeks.</div>
                    <div class="uppercase tracking-widest text-xs text-gray-500 mt-2">5231 Followers</div>
                  </div>
                </div>
                <div class="w-1/5 px-4">
                  <div><a href="#"><img src="../../static/albumcover05.jpg" alt="album cover"></a></div>
                  <div>
                    <a href="#" class="font-semibold block hover:text-white">Accoustic Pop Covers 2019</a>
                    <div class="text-gray-500 mt-2">Amazing Accoustic Covers updated every weeks.</div>
                    <div class="uppercase tracking-widest text-xs text-gray-500 mt-2">5231 Followers</div>
                  </div>
                </div>
                <div class="w-1/5 px-4">
                  <div><a href="#"><img src="../../static/albumcover03.jpg" alt="album cover"></a></div>
                  <div>
                    <a href="#" class="font-semibold block hover:text-white">Accoustic Pop Covers 2019</a>
                    <div class="text-gray-500 mt-2">Amazing Accoustic Covers updated every weeks.</div>
                    <div class="uppercase tracking-widest text-xs text-gray-500 mt-2">5231 Followers</div>
                  </div>
                </div>
                <div class="w-1/5 px-4">
                  <div><a href="#"><img src="../../static/albumcover01.jpg" alt="album cover"></a></div>
                  <div>
                    <a href="#" class="font-semibold block hover:text-white">Accoustic Pop Covers 2019</a>
                    <div class="text-gray-500 mt-2">Amazing Accoustic Covers updated every weeks.</div>
                    <div class="uppercase tracking-widest text-xs text-gray-500 mt-2">5231 Followers</div>
                  </div>
                </div>
                <div class="w-1/5 px-4">
                  <div><a href="#"><img src="../../static/albumcover02.jpg" alt="album cover"></a></div>
                  <div>
                    <a href="#" class="font-semibold block hover:text-white">Accoustic Pop Covers 2019</a>
                    <div class="text-gray-500 mt-2">Amazing Accoustic Covers updated every weeks.</div>
                    <div class="uppercase tracking-widest text-xs text-gray-500 mt-2">5231 Followers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-700-spotify flex-none h-22 px-5 flex items-center justify-between">
      <div class="flex items-center">
        <a href="#"><img src="../../static/albumcover01.jpg" alt="album cover" class="w-16 h-16"></a>
        <div class="ml-3">
          <div><a href="#" class="hover:underline">Name of Song</a></div>
          <div><a href="#" class="text-xs text-gray-500 hover:underline hover:text-white">Artist name</a></div>
        </div>
      </div>
      <div class="player-controls flex flex-col justify-center">
        <div class="flex justify-center">
          <button>
            <svg class="fill-current text-gray-400 hover:text-white h-4 w-4" viewBox="0 0 20 20"><path d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z"/></svg>
          </button>
          <button class="ml-8">
            <svg class="fill-current text-gray-400 hover:text-white h-6 w-6" viewBox="0 0 20 20"><path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z"/></svg>
          </button>
          <button class="ml-8">
            <svg class="fill-current text-gray-400 hover:text-white h-8 w-8" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm12.73-1.41A8 8 0 104.34 4.34a8 8 0 0011.32 11.32zM7 6l8 4-8 4V6z"/></svg>
          </button>
          <button class="ml-8">
            <svg class="fill-current text-gray-400 hover:text-white h-6 w-6" viewBox="0 0 20 20"><path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z"/></svg>
          </button>
          <button class="ml-8">
            <svg class="fill-current text-gray-400 hover:text-white h-4 w-4" viewBox="0 0 24 24" width="24" height="24"><path d="M5.41 16H18a2 2 0 002-2 1 1 0 012 0 4 4 0 01-4 4H5.41l2.3 2.3a1 1 0 01-1.42 1.4l-4-4a1 1 0 010-1.4l4-4a1 1 0 111.42 1.4L5.4 16zM6 8a2 2 0 00-2 2 1 1 0 01-2 0 4 4 0 014-4h12.59l-2.3-2.3a1 1 0 111.42-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.42-1.4L18.6 8H6z"/></svg>
          </button>
        </div>
        <div class="max-w-full mt-3 flex items-center justify-center">
          <div class=" text-xs text-gray-500">1:34</div>
          <div class="bg-gray-500 rounded-lg w-full xl:w-150 h-1 ml-3"></div>
          <div class="ml-3 text-xs text-gray-500">3:23</div>
        </div>
      </div>
      <div class="volume-controls flex items-center">
        <button>
          <svg class="fill-current text-gray-400 hover:text-white h-6 w-6" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"/></svg>
        </button>
        <button class="ml-4">
          <svg class="fill-current text-gray-400 hover:text-white h-5 w-5" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 6h18V4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V6zm10 6H9v1.78c-.61.55-1 1.33-1 2.22s.39 1.67 1 2.22V20h4v-1.78c.61-.55 1-1.34 1-2.22s-.39-1.67-1-2.22V12zm-2 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM22 8h-6c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h6c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1zm-1 10h-4v-8h4v8z"/></svg>
        </button>
        <button class="ml-4">
          <svg class="fill-current text-gray-400 hover:text-white h-5 w-5" width="24" height="24" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        </button>
        <div class="bg-gray-500 rounded-lg w-20 h-1 ml-3"></div>
        <button class="ml-4">
          <svg class="fill-current text-gray-400 hover:text-white h-4 w-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Spotify',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .sidebar-spotify::-webkit-scrollbar
  {
    width: 8px;
    background-color: #121212;
  }
  .sidebar-spotify::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #535353;
  }
  .content-spotify::-webkit-scrollbar
  {
    width: 8px;
    background-color: #181818;
  }
  .content-spotify::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #535353;
  }
</style>
