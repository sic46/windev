import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
  <h1>Sponsor's Handbook</h2>
Find out more about the types sponsors which partner with motorsport properties.
In simple terms a sponsor is defined as a brand. A sponsored otherwise known in the industry as a sport property is a team, event or individual.
The 3 most common levels of sponsorship are:
<ul>
<li>Title sponsor
<li>key partner
<li>official supplier
</ul>
<h2>Title Sponsor</h2>
A title sponsor is the largest contributor to the bottom line of the sponsored. As the name suggests, the brand name will appear next to the property’s name. This sponsor will have highly visible branding. In return for many benefits of association with the sponsored.
<h3>Notable title sponsorship</h3>
<ul>
<li>Aston Martin Red Bull Racing F1
<li>Repsol Honda MotoGP
<li>Shell V-Power Racing
</ul>
<h2>Partner</h2>
A partner provides funds in return for the use of the sponsored’s brand and association. It is common for there to be different levels of a partner which is defined by the funds which a sponsor provides. This category may also be considered a key sponsor, or primary partner.
A partner may be categorised as a gold, silver or bronze level partner. Or have an association with a product category such as official fuel and lubricant partner.
<h3>Notable partnerships</h3>
<ul>
<li>Shell- Ferrari
<li>TAG Heure- Official Watch Red Bull Racing F1
<li>Rolex- Official Timekeeper of Formula 1
</ul>
<h2>Supplier</h2>
A supplier sponsorship provides goods or services to a sponsored party at low cost or no cost. In return, a brand will receive some exposure or benefits from the sponsee. Other category titles include Assoctiate sponsor, technical partner or team supplier.
This is usually the largest populated category including brands from tyres, suspension and electronics. Additional suppliers include equipment, uniforms and business services not considered vital to ultimate performance. Sponsees may be obligated to list series sponsors as suppliers. For example, all Formula 1 teams list series tyre supplier Pirelli as a team supplier.
<ul>
<li>Michelin- Official tyre supplier of MotoGP
<li>Shell- Official fuels supplier Supercars
<li>Kenwood- Official supplier radio and communications McLaren F1
</ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
