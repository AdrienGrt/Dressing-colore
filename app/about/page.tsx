"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Heart, 
  Award, 
  Users, 
  Sparkles, 
  ArrowRight, 
  Leaf, 
  Truck, 
  MessageCircle,
  Star,
  Quote,
  Instagram,
  Facebook,
  Youtube,
  CheckCircle2
} from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF7] overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/60 via-transparent to-orange-100/40" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-full px-5 py-2 mb-8 shadow-lg shadow-rose-500/25">
              <Heart className="h-4 w-4 fill-white" />
              <span className="text-sm font-semibold">Notre Histoire</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Plus qu'une mercerie,{" "}
              <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                une passion partagée
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Depuis 2017, Le Dressing Coloré accompagne les créatrices passionnées 
              avec des tissus de qualité et une expertise chaleureuse.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section with Image */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                {/* Main image */}
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&h=1000&auto=format&fit=crop"
                    alt="Atelier de couture"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* Floating card */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-[200px] animate-float-gentle">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center">
                      <Heart className="h-6 w-6 text-white fill-white" />
                    </div>
                    <div>
                      <div className="font-bold text-2xl text-slate-900">2017</div>
                      <div className="text-sm text-slate-500">Année de création</div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl -z-10 rotate-6" />
                <div className="absolute -bottom-4 -left-8 w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full -z-10" />
              </div>
            </div>

            {/* Text Side */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 rounded-full px-4 py-1.5 text-sm font-semibold">
                <Sparkles className="h-4 w-4" />
                L'aventure commence
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Une histoire de{" "}
                <span className="bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
                  fil en aiguille
                </span>
              </h2>

              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  <span className="font-semibold text-rose-600">Le Dressing Coloré</span> est né de la passion de Marie, 
                  couturière depuis son enfance, qui rêvait de créer un espace où les amateurs de couture 
                  pourraient trouver des tissus de qualité exceptionnelle et tous les accessoires 
                  nécessaires à leurs créations les plus folles.
                </p>
                <p>
                  Depuis notre ouverture, nous avons accompagné des <span className="font-semibold text-slate-900">milliers 
                  de créatrices</span>, débutantes ou expérimentées, dans la réalisation de leurs projets. 
                  Notre sélection soigneuse de tissus et d'accessoires reflète notre engagement 
                  envers la qualité et la créativité.
                </p>
                <p>
                  Notre philosophie : rendre la couture accessible à tous tout en privilégiant 
                  des <span className="font-semibold text-emerald-600">matériaux durables et responsables</span>. 
                  Chaque produit est choisi avec soin pour vous offrir le meilleur et inspirer 
                  votre créativité au quotidien.
                </p>
              </div>

              <Button size="lg" asChild className="group bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white rounded-full px-8 shadow-lg shadow-rose-500/25">
                <Link href="/shop">
                  Découvrir nos produits
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(251,113,133,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(251,146,60,0.08),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-5 py-2 mb-6 shadow-lg">
              <Award className="h-4 w-4" />
              <span className="text-sm font-semibold">Ce qui nous anime</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Nos{" "}
              <span className="bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
                valeurs
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Les principes qui guident chacune de nos actions et sélections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Passion",
                description: "La couture est notre amour, et nous mettons tout notre cœur à vous transmettre cette passion.",
                gradient: "from-rose-500 to-pink-500",
                bgColor: "bg-rose-50"
              },
              {
                icon: Award,
                title: "Qualité",
                description: "Chaque produit est rigoureusement sélectionné pour vous garantir le meilleur.",
                gradient: "from-amber-500 to-orange-500",
                bgColor: "bg-amber-50"
              },
              {
                icon: Users,
                title: "Communauté",
                description: "Plus de 10 000 créatrices nous font confiance. Ensemble, nous partageons et créons.",
                gradient: "from-blue-500 to-cyan-500",
                bgColor: "bg-blue-50"
              },
              {
                icon: Leaf,
                title: "Responsabilité",
                description: "Nous privilégions les tissus certifiés et les pratiques durables pour la planète.",
                gradient: "from-emerald-500 to-teal-500",
                bgColor: "bg-emerald-50"
              }
            ].map((value, i) => (
              <div 
                key={i}
                className="group relative bg-white rounded-3xl border border-slate-200 p-8 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-100/50 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>

                {/* Decorative corner */}
                <div className={`absolute top-4 right-4 w-12 h-12 ${value.bgColor} rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500 via-pink-500 to-orange-500" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Le Dressing Coloré en chiffres
            </h2>
            <p className="text-xl text-white/80">
              Des années de passion et de créations partagées
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "10k+", label: "Clientes satisfaites", icon: "👩‍🎨" },
              { value: "500+", label: "Références produits", icon: "🧵" },
              { value: "8", label: "Années d'expérience", icon: "⭐" },
              { value: "4.9/5", label: "Note moyenne", icon: "💜" }
            ].map((stat, i) => (
              <div 
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                <p className="text-white/80 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-1.5 text-sm font-semibold">
                <CheckCircle2 className="h-4 w-4" />
                Nos engagements
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Un service{" "}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  à la hauteur
                </span>
                {" "}de vos créations
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: Truck,
                    title: "Livraison rapide",
                    description: "Expédition sous 24h et livraison en 48h partout en France métropolitaine.",
                    color: "text-blue-500"
                  },
                  {
                    icon: MessageCircle,
                    title: "Conseil personnalisé",
                    description: "Notre équipe de passionnées répond à toutes vos questions par chat, email ou téléphone.",
                    color: "text-rose-500"
                  },
                  {
                    icon: Leaf,
                    title: "Éco-responsable",
                    description: "Emballages recyclés, tissus certifiés Oeko-Tex et partenaires locaux privilégiés.",
                    color: "text-emerald-500"
                  },
                  {
                    icon: Heart,
                    title: "Satisfait ou remboursé",
                    description: "30 jours pour changer d'avis. Retours gratuits et remboursement rapide.",
                    color: "text-orange-500"
                  }
                ].map((commitment, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center ${commitment.color} group-hover:scale-110 transition-transform duration-300`}>
                      <commitment.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{commitment.title}</h3>
                      <p className="text-slate-600">{commitment.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&h=400&auto=format&fit=crop"
                    alt="Tissus colorés"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=400&h=300&auto=format&fit=crop"
                    alt="Bobines de fil"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1594040226829-7f251ab46d80?q=80&w=400&h=300&auto=format&fit=crop"
                    alt="Machine à coudre"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?q=80&w=400&h=400&auto=format&fit=crop"
                    alt="Création textile"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full px-5 py-2 mb-6 shadow-lg">
              <Star className="h-4 w-4 fill-white" />
              <span className="text-sm font-semibold">Témoignages</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Ce que disent nos{" "}
              <span className="bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
                créatrices
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sophie L.",
                role: "Couturière passionnée",
                avatar: "👩‍🦰",
                rating: 5,
                text: "Des tissus d'une qualité exceptionnelle ! Je commande régulièrement et je n'ai jamais été déçue. Le service client est au top, toujours de bons conseils."
              },
              {
                name: "Marie D.",
                role: "Créatrice de mode",
                avatar: "👩‍🎨",
                rating: 5,
                text: "Ma mercerie préférée ! La sélection de tissus bio est incroyable et les prix sont très raisonnables. Livraison toujours rapide et soignée."
              },
              {
                name: "Camille R.",
                role: "Débutante enthousiaste",
                avatar: "👧",
                rating: 5,
                text: "J'ai commencé la couture grâce à leur kit débutant. L'équipe m'a guidée pour choisir mes premiers tissus. Une vraie mine d'or pour les novices !"
              }
            ].map((testimonial, i) => (
              <div 
                key={i}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-rose-200 transition-all duration-300 relative group"
              >
                <Quote className="absolute top-6 right-6 h-8 w-8 text-rose-200 group-hover:text-rose-300 transition-colors" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-600 leading-relaxed mb-6">"{testimonial.text}"</p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-100 to-orange-100 flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social & Community Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Rejoignez notre communauté
            </h2>
            <p className="text-xl text-slate-600 mb-10">
              Suivez-nous pour découvrir nos nouveautés, tutoriels et inspirations couture
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { icon: Instagram, label: "@ledressingcolore", followers: "15k", color: "from-purple-500 to-pink-500" },
                { icon: Facebook, label: "Le Dressing Coloré", followers: "8k", color: "from-blue-500 to-blue-600" },
                { icon: Youtube, label: "Tutos Couture", followers: "5k", color: "from-red-500 to-red-600" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href="#"
                  className="flex items-center gap-3 bg-white border-2 border-slate-200 hover:border-rose-300 rounded-full px-6 py-3 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <social.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-slate-900">{social.label}</div>
                    <div className="text-sm text-slate-500">{social.followers} abonnés</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Instagram Feed Placeholder */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {[
                "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=200&h=200&fit=crop",
                "https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?w=200&h=200&fit=crop",
                "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=200&h=200&fit=crop",
                "https://images.unsplash.com/photo-1615529151169-7b1ff50dc7f2?w=200&h=200&fit=crop",
                "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=200&h=200&fit=crop",
                "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=200&h=200&fit=crop"
              ].map((src, i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden group cursor-pointer">
                  <Image
                    src={src}
                    alt={`Instagram ${i + 1}`}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="text-6xl mb-6">🧵</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Prête à créer avec nous ?
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Découvrez notre sélection de tissus et accessoires de qualité 
              pour donner vie à tous vos projets créatifs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white rounded-full px-10 py-6 text-lg shadow-lg shadow-rose-500/25">
                <Link href="/shop">
                  Découvrir la boutique
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-10 py-6 text-lg">
                <Link href="/contact">
                  Nous contacter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx global>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float-gentle {
          animation: float-gentle 4s ease-in-out infinite;
        }
      `}</style>
    </main>
  )
}