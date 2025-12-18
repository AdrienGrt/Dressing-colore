"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CGVPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF7]">
      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-rose-100/40 via-transparent to-purple-100/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-slate-600 hover:text-rose-600 transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour à l'accueil
            </Link>
            
            <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Conditions Générales de Vente
            </h1>
            <p className="text-slate-600">
              Dernière mise à jour : Décembre 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">
            
            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Préambule</h2>
              <p className="text-slate-600 leading-relaxed">
                Ces Conditions Générales de Vente ("CGV") régissent les relations entre :
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>Justine Gardrat</strong>, auto-entrepreneur, immatriculé sous le numéro SIRET 88243666000014, 
                dont l'adresse est 49 Allées des fontaines 82400, Valence d'Agen
              </p>
              <p className="text-slate-600 leading-relaxed">
                et toute personne physique ou morale souhaitant passer commande sur le site internet 
                (ci-après "le Client" ou "l'Acheteur").
              </p>
              <p className="text-slate-600 leading-relaxed">
                La Vendeuse fabrique des vêtements artisanaux (principalement en wax 100 % coton, 
                des tissus mohair/polyester, coton, rembourrage polyester Oeko-Tex) et propose 
                également des articles personnalisés ou sur commande.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Objet</h2>
              <p className="text-slate-600 leading-relaxed">
                Les présentes CGV ont pour objet de définir les droits et obligations des parties 
                dans le cadre de la vente à distance des produits proposés sur le site.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Produits</h2>
              <p className="text-slate-600 leading-relaxed">
                Les produits vendus sont des créations artisanales, en petites séries ou en pièces uniques.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Certains articles peuvent être personnalisés ou fabriqués sur commande selon les choix 
                du Client (tissu, taille, design).
              </p>
              <p className="text-slate-600 leading-relaxed">
                Les images présentent les tissus disponibles, mais chaque pièce est unique : 
                même modèle ≠ un vêtement identique à un autre.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Prix</h2>
              <p className="text-slate-600 leading-relaxed">
                Les prix sont exprimés en euros (€), toutes taxes comprises (TTC).
              </p>
              <p className="text-slate-600 leading-relaxed">
                TVA non applicable, article 293 B du Code Général des Impôts.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Les prix comprennent l'ensemble des frais liés à la fabrication du produit, 
                y compris les cotisations sociales obligatoires (URSSAF) de l'auto-entrepreneure.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Le coût est calculé en fonction du temps de travail de la Vendeuse et des matériaux utilisés, 
                et peut varier si le prix des tissus change.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Si les coûts de matières premières (tissus) augmentent, la Vendeuse se réserve le droit 
                de mettre à jour les prix des articles, même pour des commandes futures.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Commandes / Personnalisation</h2>
              <p className="text-slate-600 leading-relaxed">
                Pour les articles en stock (éditions limitées), le Client choisit le modèle, la taille, 
                la couleur selon les disponibilités.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Pour les articles sur mesure ou personnalisés : le Client et la Vendeuse échangent 
                (mail, visio) sur les choix de tissus, les mesures, le design.
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>Un acompte de 30 % du prix total de la commande est demandé pour toute commande personnalisée.</strong>
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Paiement</h2>
              <p className="text-slate-600 leading-relaxed">
                Modes de paiement acceptés : PayPal et carte bancaire (CB).
              </p>
              <p className="text-slate-600 leading-relaxed">
                Le paiement est sécurisé via la plateforme Sumup.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Le paiement intégral (ou de l'acompte pour les projets sur commande) doit être effectué 
                avant tout envoi (ou fabrication).
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Délais de fabrication et d'expédition</h2>
              <p className="text-slate-600 leading-relaxed">
                Pour les articles en stock : envoi sous 5 jours ouvrés après confirmation de la commande.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Pour les commandes personnalisées : un délai de 2 à 3 semaines, en fonction de la complexité 
                du projet (achats de fourniture, création…).
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Livraison</h2>
              <p className="text-slate-600 leading-relaxed">
                Livraison uniquement en France métropolitaine.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Transporteur : Mondial Relay – Point Relais.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Les frais de livraison sont calculés automatiquement en fonction du poids réel de la commande 
                et sont affichés avant la validation du paiement.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Les tarifs Mondial Relay peuvent évoluer : les frais appliqués sont ceux en vigueur au moment de la commande.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Rétractation / Retours</h2>
              <p className="text-slate-600 leading-relaxed">
                Conformément à l'article L. 221-28 du Code de la consommation, le droit de rétractation 
                ne s'applique pas pour les biens "confectionnés selon les spécifications du consommateur 
                ou nettement personnalisés".
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>Les articles personnalisés ou fabriqués sur commande sont uniques et réalisés selon vos spécifications. 
                Conformément à l'article L. 221‑28, 3° du Code de la consommation, ils ne peuvent pas être retournés.</strong> 
                Merci de bien vérifier vos choix avant de valider votre commande.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Pour les articles en stock, les retours ne sont pas acceptés. En cas de problème concernant 
                un défaut mineur (ex. couture défaite, bouton qui a sauté), merci de me contacter dans un délai 
                d'un mois à compter de la réception afin que je vous indique comment effectuer une retouche vous-même, 
                ou, si nécessaire, me renvoyer l'article pour que je le retouche. Les frais de retour pour retouche 
                sont à la charge de la vendeuse.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Commandes personnalisées / Acompte / Annulation</h2>
              
              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Acompte</h3>
              <p className="text-slate-600 leading-relaxed">
                Pour toute commande personnalisée, un acompte de 30 % du prix total est demandé pour confirmer la commande.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Le paiement de l'acompte vaut acceptation des conditions de fabrication, délai et prix.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Jour de début de fabrication</h3>
              <p className="text-slate-600 leading-relaxed">
                La Vendeuse communique au Client le jour de début de fabrication, qui doit être validé conjointement 
                par le Client et la Vendeuse au moment de la commande.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Toute modification ou annulation dépendra de cette date : avant le début de fabrication, 
                certaines modifications ou annulations sont possibles ; après le début de fabrication, 
                elles ne sont plus acceptées sauf cas exceptionnel.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Annulation ou modifications avant le début de fabrication</h3>
              <ul className="text-slate-600 space-y-2 ml-4">
                <li><strong>Annulation :</strong> possible uniquement en cas de problème imprévu ou exceptionnel (maladie, accident, situation particulière).</li>
                <li><strong>Changements mineurs :</strong> choix de tissu, couleur ou motif, avant le début de fabrication.</li>
                <li><strong>Changement de projet majeur :</strong> accepté au cas par cas, avant le début de fabrication.</li>
                <li><strong>Problème financier :</strong> possibilité de prolonger le délai de début de fabrication pour permettre au Client de régler le solde sans annuler la commande.</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-4">
                En cas d'annulation acceptée, l'acompte pourra être remboursé ou reporté, selon accord entre les parties.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Annulation après le début de fabrication</h3>
              <p className="text-slate-600 leading-relaxed">
                Une fois la fabrication commencée, aucune annulation n'est acceptée, sauf situation exceptionnelle 
                justifiée et validée par la Vendeuse.
              </p>
              <p className="text-slate-600 leading-relaxed">
                L'acompte reste acquis pour couvrir les matériaux et le travail déjà engagés.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Refus ou annulation par la Vendeuse</h3>
              <p className="text-slate-600 leading-relaxed">
                La Vendeuse se réserve le droit de refuser ou d'annuler toute commande personnalisée pour des raisons objectives, notamment :
              </p>
              <ul className="text-slate-600 space-y-2 ml-4">
                <li>Complexité technique ou impossibilité de réalisation du produit demandé</li>
                <li>Prix ou conditions incompatibles avec le coût réel de fabrication</li>
                <li>Contenu ou demande contraire à la loi, à l'éthique ou à la sécurité</li>
                <li>Produits ou projets non conformes à la ligne de création ou au savoir-faire de la Vendeuse</li>
                <li>Indisponibilité de matériaux nécessaires ou impossibilité logistique</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-4">
                Toute commande annulée par la Vendeuse sera remboursée intégralement si un acompte a été versé.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Propriété intellectuelle</h2>
              <p className="text-slate-600 leading-relaxed">
                Tous les droits de propriété intellectuelle (droit d'auteur, photo, design, texte) relatifs aux créations, 
                photos, textes du site restent la propriété de la Vendeuse.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Toute reproduction, copie, modification, distribution, utilisation des créations, photos ou textes 
                sans autorisation écrite de la Vendeuse est strictement interdite.
              </p>
            </div>

            {/* Section 12 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Données personnelles / RGPD</h2>
              <p className="text-slate-600 leading-relaxed">
                La Vendeuse collecte l'adresse e-mail des clients (newsletter) et leurs coordonnées (nom, adresse) 
                pour assurer le suivi des commandes et contacter en cas de problème après-vente.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Ces données sont utilisées uniquement dans le cadre de la relation commerciale 
                (gestion des commandes, SAV, newsletter si le client y consent).
              </p>
              <p className="text-slate-600 leading-relaxed">
                Les données ne sont pas cédées à des tiers sans consentement explicite, sauf aux prestataires 
                logistiques ou de paiement dans le cadre de la commande.
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>Vos droits :</strong> droit d'accès, de rectification, de suppression de vos données (conformément au RGPD). 
                Pour exercer ces droits, contactez-nous à ledressingcolore@gmail.com.
              </p>
            </div>

            {/* Section 13 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Responsabilité</h2>
              <p className="text-slate-600 leading-relaxed">
                La Vendeuse s'engage à fabriquer les articles avec soin, mais la responsabilité ne peut être engagée 
                qu'en cas de faute prouvée de la part de la Vendeuse.
              </p>
              <p className="text-slate-600 leading-relaxed">
                En cas de défaut (défaut de conformité, défaut de fabrication), le Client doit envoyer un e-mail à 
                ledressingcolore@gmail.com pour signaler le problème et éventuellement convenir d'une retouche.
              </p>
            </div>

            {/* Section 14 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Force majeure</h2>
              <p className="text-slate-600 leading-relaxed">
                La Vendeuse ne pourra être tenue responsable en cas de retard ou d'inexécution due à un cas de force majeure 
                (grève, catastrophe naturelle, rupture de stock de tissu, retard transporteur, etc.).
              </p>
            </div>

            {/* Section 15 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Loi applicable / Juridiction</h2>
              <p className="text-slate-600 leading-relaxed">
                Les présentes CGV sont soumises au droit français.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Tout litige relatif à l'interprétation, l'exécution ou la validité des CGV sera soumis aux tribunaux 
                compétents du ressort du domicile de la Vendeuse, sauf disposition légale impérative contraire.
              </p>
            </div>

            {/* Separator */}
            <div className="border-t border-slate-200 my-16"></div>

            {/* CGU Section */}
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Conditions Générales d'Utilisation (CGU)
            </h1>

            {/* CGU Section 1 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Objet</h2>
              <p className="text-slate-600 leading-relaxed">
                Les CGU ont pour objet de définir les règles d'utilisation du site internet (boutique en ligne) géré par la Vendeuse.
              </p>
            </div>

            {/* CGU Section 2 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Accès au site</h2>
              <p className="text-slate-600 leading-relaxed">
                L'accès au site est réservé à toute personne souhaitant découvrir, personnaliser ou acheter les produits.
              </p>
              <p className="text-slate-600 leading-relaxed">
                L'utilisateur déclare avoir la capacité juridique nécessaire pour passer des commandes 
                (être majeur ou avoir l'autorisation de ses représentants légaux).
              </p>
            </div>

            {/* CGU Section 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Propriété intellectuelle</h2>
              <p className="text-slate-600 leading-relaxed">
                Le site, son contenu (textes, images, créations, designs) sont protégés par le droit d'auteur.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Toute reproduction, représentation, modification, publication, adaptation totale ou partielle 
                du site ou de ses contenus est interdite sans l'accord écrit préalable de la Vendeuse.
              </p>
            </div>

            {/* CGU Section 4 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Données personnelles</h2>
              <p className="text-slate-600 leading-relaxed">
                Les données personnelles collectées via le site (email, adresse, etc.) sont traitées conformément 
                à la Politique de confidentialité / RGPD.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Les utilisateurs ont le droit d'accéder, de rectifier, de supprimer leurs données.
              </p>
            </div>

            {/* CGU Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Utilisation du site</h2>
              <p className="text-slate-600 leading-relaxed">
                Le Client s'engage à utiliser le site de manière licite, à ne pas perturber son fonctionnement, 
                à ne pas introduire de virus, malwares ou tout code nuisible.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Il s'engage à ne pas utiliser les contenus du site pour des usages commerciaux non autorisés.
              </p>
            </div>

            {/* CGU Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Responsabilité</h2>
              <p className="text-slate-600 leading-relaxed">
                La Vendeuse met en œuvre tous les moyens raisonnables pour assurer l'exactitude des informations sur le site, 
                mais ne peut garantir que le site soit exempt d'erreurs.
              </p>
              <p className="text-slate-600 leading-relaxed">
                En cas de dysfonctionnement du site (erreur de serveur, bug), la responsabilité de la Vendeuse est limitée 
                aux obligations prévues dans les CGV (livraison, qualité des produits), dans la limite du raisonnable 
                et seulement en cas de faute avérée.
              </p>
            </div>

            {/* CGU Section 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Modification des CGU/CGV</h2>
              <p className="text-slate-600 leading-relaxed">
                La Vendeuse se réserve le droit de modifier les présentes CGU et CGV à tout moment.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Les modifications prennent effet dès leur publication sur le site.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Les clients ayant passé commande avant la modification restent soumis aux CGV/CGU en vigueur 
                au moment de la commande.
              </p>
            </div>

            {/* CGU Section 8 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Droit applicable / Litiges</h2>
              <p className="text-slate-600 leading-relaxed">
                Les présentes CGU sont régies par le droit français.
              </p>
              <p className="text-slate-600 leading-relaxed">
                En cas de litige, les clients peuvent contacter la Vendeuse à l'adresse e-mail 
                ledressingcolore@gmail.com pour tenter une résolution amiable.
              </p>
              <p className="text-slate-600 leading-relaxed">
                À défaut d'accord, le litige sera porté devant les tribunaux compétents selon les règles légales applicables.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}