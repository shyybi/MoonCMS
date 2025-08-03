import { Cog6ToothIcon, GlobeAltIcon, DocumentTextIcon, DocumentDuplicateIcon, TagIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export type DashboardCategory = "posts" | "pages" | "tags" | "members" | "settings";

interface SideBarProps {
  bgColor: string;
  isDarkBg: boolean;
  category: DashboardCategory;
  setCategory: (category: DashboardCategory) => void;
}


const SideBar = ({ bgColor, isDarkBg, category, setCategory }: SideBarProps)  => {
  return (
	<aside
	  className={`flex flex-col min-h-screen w-72 shadow-xl ${isDarkBg ? "text-white" : "text-gray-900"}`}
	  style={{ background: `linear-gradient(180deg, ${bgColor} 80%, ${isDarkBg ? '#1a233a' : '#e5e9f7'} 100%)` }}
	>
	  {/* Logo/Header */}
	  <div className="flex items-center gap-3 px-8 py-8 border-b border-gray-700/30">
		<Cog6ToothIcon className="h-8 w-8 text-blue-400" />
		<span className="font-bold text-2xl tracking-wide">MoonCMS</span>
	  </div>

	  {/* Navigation */}
	  <nav className="flex-1 flex flex-col justify-between py-8">
		<div className="space-y-2 px-6">
  <a 
    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition hover:bg-white/20 hover:text-blue-400 cursor-pointer ${category === 'posts' ? 'bg-white/20 text-blue-400' : ''}`}
    onClick={() => setCategory('posts')}
  >
			<DocumentTextIcon className="h-6 w-6" />
			<span>Posts</span>
		  </a>
  <a 
    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition hover:bg-white/20 hover:text-blue-400 cursor-pointer ${category === 'pages' ? 'bg-white/20 text-blue-400' : ''}`}
    onClick={() => setCategory('pages')}
  >
			<DocumentDuplicateIcon className="h-6 w-6" />
			<span>Pages</span>
		  </a>
  <a 
    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition hover:bg-white/20 hover:text-blue-400 cursor-pointer ${category === 'tags' ? 'bg-white/20 text-blue-400' : ''}`}
    onClick={() => setCategory('tags')}
  >
			<TagIcon className="h-6 w-6" />
			<span>Tags</span>
		  </a>
  <a 
    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition hover:bg-white/20 hover:text-blue-400 cursor-pointer ${category === 'members' ? 'bg-white/20 text-blue-400' : ''}`}
    onClick={() => setCategory('members')}
  >
			<UserGroupIcon className="h-6 w-6" />
			<span>Members</span>
		  </a>
		</div>

		{/* Footer/Settings */}
		<div className="px-6 pb-8">
						<a
						href="/"
						rel="noopener noreferrer"
						className="flex items-center gap-3 px-3 py-2 rounded-lg transition hover:bg-white/20 hover:text-blue-400 cursor-pointer"
						>
						<GlobeAltIcon className="h-6 w-6" />
						<span>View Site</span>
						</a>
  <a 
    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition hover:bg-white/20 hover:text-blue-400 cursor-pointer ${category === 'settings' ? 'bg-white/20 text-blue-400' : ''}`}
    onClick={() => setCategory('settings')}
  >
			<Cog6ToothIcon className="h-6 w-6" />
			<span>Global Settings</span>
		  </a>
		</div>
	  </nav>
	</aside>
  );
};

export default SideBar;