interface SecondProps {
  bgSecondColor: string;
  isDarkBgSecond: boolean;
}

const Second = ({ bgSecondColor, isDarkBgSecond }: SecondProps) => {
  const posts = [
    {
      id: 1,
      title: "Introduction à MoonCMS : Le CMS du Futur",
      author: "Charlotte",
      date: "3 août 2025",
      readTime: "5 min",
      excerpt: "Découvrez MoonCMS, une plateforme révolutionnaire qui simplifie la création et la gestion de contenu web. Avec son interface intuitive et ses fonctionnalités avancées, MoonCMS transforme votre expérience de publication.",
      tags: ["CMS", "Web", "Innovation"],
      featured: true,
      image: "/img/placeholder.png"
    },
    {
      id: 2,
      title: "Guide Complet : Créer votre Premier Article",
      author: "Thomas",
      date: "1 août 2025",
      readTime: "8 min",
      excerpt: "Apprenez à créer, éditer et publier vos premiers articles avec MoonCMS. Ce guide détaillé vous accompagne pas à pas dans la découverte de toutes les fonctionnalités essentielles.",
      tags: ["Guide", "Tutorial"],
      featured: false,
      image: "/img/placeholder.png"
    },
    {
      id: 3,
      title: "Optimisation SEO avec MoonCMS",
      author: "Sarah",
      date: "29 juillet 2025",
      readTime: "6 min",
      excerpt: "Maximisez la visibilité de votre contenu grâce aux outils SEO intégrés de MoonCMS. Méta-descriptions, mots-clés, et optimisations automatiques pour un référencement optimal.",
      tags: ["SEO", "Marketing"],
      featured: false,
      image: "/img/placeholder.png"
    },
    {
      id: 4,
      title: "Personnaliser votre Thème MoonCMS",
      author: "Alex",
      date: "27 juillet 2025",
      readTime: "4 min",
      excerpt: "Créez une identité visuelle unique avec les outils de personnalisation avancés de MoonCMS.",
      tags: ["Design", "Customisation"],
      featured: false,
      image: "/img/placeholder.png"
    }
  ];

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <div style={{ backgroundColor: bgSecondColor }} className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <div className={`relative overflow-hidden rounded-2xl shadow-2xl group ${
              isDarkBgSecond ? "bg-white/5" : "bg-white/10"
            }`}>
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-96 bg-gradient-to-br from-blue-400 to-purple-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex gap-2 mb-3">
                        {featuredPost.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`md:w-1/2 p-8 md:p-12 flex flex-col justify-center ${
                  isDarkBgSecond ? "text-white" : "text-white"
                }`}>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg opacity-90 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm opacity-80 mb-6">
                    <span>Par {featuredPost.author}</span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime} de lecture</span>
                  </div>
                  <button className="self-start px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition font-medium">
                    Lire l'article complet
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map((post) => (
            <article 
              key={post.id}
              className={`group cursor-pointer transition-all duration-300 hover:-translate-y-2 ${
                isDarkBgSecond ? "text-white" : "text-white"
              }`}
            >
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-video bg-gradient-to-br from-blue-400 to-purple-600">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
                    {post.tags[0]}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-bold group-hover:opacity-80 transition-opacity leading-tight">
                  {post.title}
                </h3>
                
                <p className="opacity-80 leading-relaxed text-sm">
                  {post.excerpt.substring(0, 120)}...
                </p>
                
                <div className="flex items-center gap-3 text-xs opacity-60">
                  <span>Par {post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className={`px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 ${
            isDarkBgSecond 
              ? "bg-white/10 hover:bg-white/20 text-white border border-white/20" 
              : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
          }`}>
            Voir tous les articles →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Second;