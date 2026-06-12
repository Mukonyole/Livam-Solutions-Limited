import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  const [expanded] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const blogs = [
    {
      slug: "Borehole Drilling Requirements in Kenya", 
      title: "Borehole Drilling Requirements in Kenya",
      content: `
      Borehole drilling in Kenya is one of the most effective solutions for addressing water scarcity in homes, farms, institutions, and businesses. However, before drilling a borehole, there are important legal, technical, and environmental requirements that must be followed. 
      `,
    },

    {
    slug: "solar-vs-electric-borehole-pumps",
    title: "Solar Borehole Pumps vs Electric Pumps: Which Is Better for Your Borehole?",
      content: `
      Choosing the right pump is one of the most important decisions when installing a borehole water system. The two most common options available in Kenya are solar borehole pumps and electric borehole pumps. Both systems are designed to extract water from underground sources, but they differ in terms of installation costs, operating expenses, reliability, and long-term benefits.
If you are planning to install a borehole for your home, farm, school, business, or institution, understanding the differences between these two pumping solutions will help you make the right investment.


      `,
    },

    {
      slug: "How to Know if Your Land Has Underground Water",
      title: "How to Know if Your Land Has Underground Water",
      content: `
      Access to a reliable water source is essential for homes, farms, schools, industries, and commercial developments. One of the most common questions property owners ask before investing in a borehole is: How can I know if my land has underground water? While groundwater exists beneath much of Kenya, the quantity, depth, and quality vary from one location to another. Understanding the signs and professional methods used to identify groundwater can help you make an informed decision before drilling.
Understanding Underground Water
Underground water, also known as groundwater, is water that collects beneath the earth's surface in spaces between soil particles and rock formations. These water-bearing formations are known as aquifers. Borehole drilling aims to reach these aquifers and extract water for domestic, agricultural, or commercial use.
However, not every location has sufficient groundwater to support a productive borehole. This is why proper assessment is important before drilling begins.
Natural Signs That May Indicate Underground Water
Although natural signs cannot guarantee the presence of groundwater, they can provide useful clues.
1. Healthy Green Vegetation
Areas with consistently green vegetation, especially during dry seasons, may indicate the presence of underground water. Trees and plants with deep root systems often access groundwater reserves beneath the surface.
2. Presence of Certain Tree Species
Some tree species thrive in areas with abundant groundwater. Trees such as fig trees, acacias, and other deep-rooted species may suggest favorable underground water conditions.
3. Wet or Damp Areas
Land that remains damp or marshy even during dry weather may indicate shallow groundwater levels. Natural springs and seepage areas are also strong indicators.
4. Valleys and Low-Lying Areas
Groundwater often accumulates in valleys, river basins, and low-lying regions. Properties located near seasonal rivers or wetlands may have a higher chance of accessing groundwater.
While these signs can be encouraging, they should never replace professional groundwater assessment.

The Importance of a Hydrogeological Survey
The most reliable way to determine whether your land has underground water is through a hydrogeological survey. This survey is conducted by qualified hydrogeologists who study the geological and hydrological characteristics of your property.
A hydrogeological survey helps determine:
•	Whether groundwater is present 
•	The estimated drilling depth 
•	Expected water yield 
•	Water quality potential 
•	Suitable drilling locations 
•	Geological challenges that may affect drilling 
Conducting a survey before drilling significantly reduces the risk of drilling a dry or low-yield borehole.
Geophysical Survey and VES Testing
One of the most commonly used methods in Kenya is Vertical Electrical Sounding (VES).
VES testing involves passing electrical currents through the ground to measure the resistance of underground formations. Different rock layers and water-bearing zones have different electrical properties, allowing specialists to identify potential aquifers.
The process helps determine:
•	Depth of groundwater 
•	Thickness of aquifers 
•	Geological formations 
•	Best drilling point on the property 
This scientific approach provides valuable information that increases the chances of a successful borehole.
Factors That Influence Groundwater Availability
Several factors determine whether a property has sufficient groundwater.
Geological Formation
Some rock formations store and transmit water better than others. Fractured rocks, sedimentary formations, and weathered zones often contain productive aquifers.
Rainfall Patterns
Areas receiving higher annual rainfall generally have better groundwater recharge rates. Consistent rainfall helps replenish underground water reserves.
Proximity to Rivers and Water Bodies
Properties located near rivers, lakes, or wetlands may benefit from increased groundwater recharge, though this is not always guaranteed.
Topography
The shape and elevation of the land influence how water infiltrates and accumulates underground.
Why Guesswork Can Be Costly
Drilling a borehole without conducting a proper survey can lead to significant financial losses. A borehole may fail to produce enough water, require excessive drilling depths, or encounter poor water quality.
Professional surveys provide critical information that helps property owners:
•	Minimize drilling risks 
•	Reduce unnecessary expenses 
•	Improve drilling success rates 
•	Plan project budgets accurately 
The cost of a survey is often much lower than the cost of drilling a non-productive borehole.
Work with Experienced Water Experts
At Livam Solutions Ltd, we understand that every property is unique. Our team provides professional groundwater assessment, hydrogeological surveys, borehole drilling, pump installation, and water solutions tailored to your needs.
Before drilling, we help clients evaluate their properties using proven scientific methods to identify suitable drilling locations and maximize the chances of success.
Conclusion
Determining whether your land has underground water requires more than observing vegetation or nearby water sources. While natural signs can provide useful hints, the most reliable approach is a professional hydrogeological and geophysical survey. These assessments help identify groundwater availability, estimate drilling depths, and improve the likelihood of a productive borehole.
If you are considering drilling a borehole in Kenya, consulting experienced professionals is the first step toward securing a dependable and sustainable water supply for your home, farm, business, or institution.


      `,
    },

    {
      slug: "Borehole Maintenance Checklist for Kenyan Property Owners",
      title: "Borehole Maintenance Checklist for Kenyan Property Owners",
      content: `
      A borehole is a valuable investment that provides a reliable and independent source of water for homes, farms, schools, businesses, and institutions. However, like any water system, a borehole requires regular maintenance to ensure it continues operating efficiently and delivers clean, safe water. Neglecting maintenance can lead to reduced water yield, pump failure, increased operating costs, and expensive repairs.

Whether your borehole is newly installed or has been in operation for several years, following a proper maintenance schedule can significantly extend its lifespan and improve performance. This borehole maintenance checklist will help Kenyan property owners keep their water systems in excellent condition.

Why Borehole Maintenance Is Important

Regular borehole maintenance helps to:

Ensure a consistent water supply
Improve water quality
Extend pump lifespan
Prevent costly breakdowns
Reduce energy consumption
Protect your investment
Detect problems before they become serious

A well-maintained borehole can serve a property efficiently for several decades.

Monthly Borehole Maintenance Checklist
1. Check Water Flow Rate

Monitor the amount of water being pumped from your borehole. A noticeable decrease in water output may indicate:

Pump problems
Blockages
Falling water levels
Borehole clogging

Early detection allows corrective action before major damage occurs.

2. Inspect the Pump System

Listen for unusual noises such as:

Grinding sounds
Vibrations
Clicking noises

These may indicate mechanical wear or electrical issues that require professional attention.

3. Check Electricity Consumption

If your electricity bills suddenly increase without a corresponding increase in water usage, the pump may be working harder than necessary due to inefficiencies or developing faults.

4. Inspect Control Panels

Ensure all switches, breakers, and control panels are functioning correctly. Look for:

Burn marks
Loose wiring
Warning lights
Corrosion

Electrical issues should be handled by qualified technicians.

Quarterly Borehole Maintenance Checklist
5. Inspect Water Storage Tanks

Clean water storage tanks regularly to prevent:

Sediment buildup
Algae growth
Contamination

Check tank lids and fittings to ensure they are secure and free from leaks.

6. Examine Pipes and Connections

Inspect all visible pipes and fittings for:

Leaks
Rust
Cracks
Loose connections

Small leaks can waste significant amounts of water and increase pumping costs.

7. Test Water Quality

Regular water testing helps identify issues such as:

Bacterial contamination
Excessive iron
High fluoride levels
Changes in pH

Safe drinking water should be tested periodically, especially for domestic use.

Annual Borehole Maintenance Checklist
8. Conduct Professional Borehole Inspection

A qualified borehole specialist should perform a comprehensive inspection at least once a year. This may include:

Pump performance testing
Borehole condition assessment
Electrical system inspection
Water level monitoring

Professional inspections help identify hidden issues before they become expensive problems.

9. Measure Static and Dynamic Water Levels

Monitoring water levels helps determine:

Aquifer performance
Borehole sustainability
Changes in groundwater availability

Significant changes may require further investigation.

10. Check Pump Efficiency

Over time, pumps lose efficiency due to wear and tear. Annual testing ensures the pump is operating at optimal performance and not consuming unnecessary energy.

11. Inspect Solar Pump Systems

For solar-powered boreholes:

Clean solar panels
Check mounting structures
Inspect wiring connections
Verify controller performance

Dust and debris on solar panels can significantly reduce pumping efficiency.

Warning Signs Your Borehole Needs Immediate Attention

Contact a borehole professional if you notice:

Reduced Water Yield

A sudden drop in water production may indicate clogging, pump failure, or declining groundwater levels.

Dirty or Discolored Water

Brown, cloudy, or sandy water may suggest:

Damaged casing
Borehole collapse
Sediment infiltration
Unusual Pump Cycling

Frequent switching on and off may signal pressure system problems or pump issues.

Increased Energy Bills

A struggling pump often consumes more electricity than normal.

Strange Noises

Grinding, rattling, or vibration can indicate worn pump components.

Common Borehole Problems in Kenya

Property owners commonly experience:

Pump failures
Sand pumping
Low water pressure
Corroded pipes
Electrical faults
Reduced borehole yield
Water contamination

Most of these issues can be prevented through routine maintenance and timely repairs.

Best Practices for Long-Term Borehole Performance

To maximize the lifespan of your borehole:

Schedule annual professional inspections.
Keep detailed maintenance records.
Test water quality regularly.
Repair leaks immediately.
Avoid over-pumping the borehole.
Use qualified technicians for repairs and servicing.
Maintain storage tanks and distribution systems.
Conclusion

A borehole is a long-term investment that can provide reliable water for many years when properly maintained. Regular inspections, water quality testing, pump monitoring, and timely repairs are essential for ensuring consistent performance and preventing costly breakdowns.

By following this borehole maintenance checklist, Kenyan property owners can protect their investment, improve water quality, and extend the lifespan of their borehole systems.

At Livam Solutions Ltd, we provide professional borehole maintenance, pump servicing, water testing, rehabilitation, solar pump installation, and complete water solutions across Kenya. Our experienced team is committed to helping clients maintain efficient and dependable water systems.
   
      `,
    },

    {
      slug: "Borehole Drilling Cost in Kenya (2026 Guide)",
      title: "Borehole Drilling Cost in Kenya (2026 Guide)",
      content: `
      Access to a reliable water source is becoming increasingly important for homeowners, farmers, schools, businesses, and institutions across Kenya. As water demand grows and municipal supplies become less reliable in some areas, many property owners are turning to boreholes as a long-term solution. One of the most common questions asked before starting a project is: How much does it cost to drill a borehole in Kenya in 2026?
The answer depends on several factors, including location, geology, borehole depth, pump type, and additional infrastructure. Understanding these costs can help you budget effectively and avoid unexpected expenses.
Average Borehole Drilling Cost in Kenya
In 2026, borehole drilling rates in Kenya generally range between KSh 3,500 and KSh 10,000 per meter, depending on the drilling method, geological conditions, and region. Most completed borehole projects cost anywhere from KSh 500,000 to over KSh 2 million when all components are included. 
The wide variation in cost is due to differences in depth, rock formations, equipment requirements, and water system specifications.
Major Cost Components
1. Hydrogeological Survey
Before drilling begins, a professional hydrogeological survey is conducted to identify the most suitable drilling location and estimate groundwater depth.
Typical cost:
•	KSh 35,000 – 65,000 
A survey helps reduce the risk of drilling a dry or low-yield borehole. 
2. Borehole Drilling
Drilling is usually the largest cost component.
Approximate drilling rates:
Depth Range	Estimated Cost
30–60 m	KSh 90,000 – 240,000
60–100 m	KSh 210,000 – 500,000
100–150 m	KSh 450,000 – 975,000
150 m+	KSh 825,000+
Actual costs depend heavily on geological conditions and drilling difficulty. 
3. Casing and Gravel Packing
After drilling, casing pipes are installed to prevent borehole collapse and protect water quality.
Typical casing costs vary depending on:
•	Borehole depth 
•	PVC or steel casing 
•	Geological conditions 
This component can add several hundred thousand shillings to the total project cost. 
4. Test Pumping and Water Analysis
Test pumping determines:
•	Water yield 
•	Sustainability of the aquifer 
•	Pump sizing requirements 
Water analysis helps identify issues such as:
•	Fluoride 
•	Iron 
•	Salinity 
•	Bacterial contamination 
These tests are essential before the borehole is commissioned. 
5. Pump Installation
Once the borehole is completed, a pumping system is installed.
Typical pump costs:
•	Electric submersible pumps: KSh 50,000 – 200,000 
•	Solar-powered pumping systems: KSh 300,000 – 800,000+ 
Solar pumping systems require a higher initial investment but offer significant long-term savings on electricity costs. 
6. Water Storage and Distribution
Additional costs may include:
•	Water storage tanks 
•	Pipework 
•	Control systems 
•	Tank towers 
•	Water treatment equipment 
The final amount depends on the property's water demand and system design. 
Factors That Affect Borehole Drilling Costs
Geological Formation
Hard rock formations require more specialized equipment and longer drilling times, increasing costs.
Borehole Depth
Deeper boreholes require more drilling, casing, and pump capacity, making them more expensive.
Location
Remote locations may attract additional mobilization charges due to transportation of drilling equipment.
Water Yield Requirements
Large farms, schools, and commercial facilities often require higher-yield boreholes and larger pumping systems.
Pump Type
Solar-powered systems typically cost more upfront than electric pumps but can significantly reduce operating expenses over time.
Typical Borehole Project Budget
For many domestic and small commercial projects in Kenya, property owners should budget approximately:
Project Type	Estimated Budget
Small domestic borehole	KSh 500,000 – 1,000,000
Standard residential/commercial borehole	KSh 800,000 – 1,500,000
Large farm or institutional borehole	KSh 1,500,000+
Actual costs may vary depending on site conditions and project specifications. 
How to Avoid Unexpected Costs
Before hiring a contractor:
•	Request a detailed written quotation. 
•	Confirm whether casing is included. 
•	Verify survey and permit requirements. 
•	Ask about test pumping and water analysis charges. 
•	Ensure the contractor is properly licensed. 
•	Compare multiple quotations before making a decision. 
A low drilling rate may not always represent the lowest overall project cost. Hidden charges often appear later if quotations are not fully itemized. 
Conclusion
The cost of drilling a borehole in Kenya in 2026 depends on several factors, including depth, geology, location, pump type, and system requirements. While some projects may cost a few hundred thousand shillings, fully equipped borehole systems can exceed KSh 2 million depending on complexity and water demand. 
A successful borehole project begins with a professional hydrogeological survey, proper planning, and working with experienced drilling specialists.
At Livam Solutions Ltd, we provide professional hydrogeological surveys, borehole drilling, pump installation, solar water pumping systems, borehole maintenance, and complete water solutions across Kenya. Contact us today for a customized borehole drilling quotation and expert guidance on your water project.
         `,
    },

     {
      slug: "10 Benefits of Drilling a Borehole for Your Home or Farm",
      title: "10 Benefits of Drilling a Borehole for Your Home or Farm",
      content: `
      Water is the foundation of every successful home, farm, and business. Yet many property owners in Kenya continue to face challenges such as unreliable municipal water supplies, seasonal shortages, and rising water costs. Drilling a borehole provides a dependable source of clean water directly from underground aquifers, giving you greater control over your water needs. Beyond ensuring a consistent supply, a borehole can increase property value, support agricultural activities, and deliver long-term financial savings.


   `,
    },
   
  ];

  return (
    <div className="container py-5">

      {/* Header */}
      <div className="text-center mb-5" data-aos="fade-up">
        <h1 className="fw-bold" style={{ color: "#01327b" }}>
          Our Blog
        </h1>

        <p className="lead text-muted">
          Reliable Water Solutions Across Kenya
        </p>
      </div>

      {/* Company Intro */}
      <div
        className="card border-0 shadow p-4 mb-5"
        data-aos="fade-up"
      >
        <p className="mb-0">
          Livam Solutions Ltd has established itself as a trusted leader
          in borehole drilling and water solutions across Kenya.

          With over <strong>5 years of experience</strong>, the company
          has successfully completed <strong>257 projects</strong> and
          drilled <strong>172 boreholes</strong>, delivering reliable
          water solutions to homes, farms, institutions, and businesses.

          Based in <strong>Kakamega</strong>, we proudly serve clients
          throughout Kenya while maintaining high standards of quality,
          professionalism, and customer satisfaction.
          </p>
          <p>
          Access to clean and reliable water is essential for homes, businesses, 
          farms, schools, hospitals, and industries. In many parts of Kenya, 
          however, water scarcity remains a major challenge due to changing weather 
          patterns, population growth, and increasing demand for sustainable water 
          sources. Borehole drilling has become one of the most effective and dependable 
          solutions for ensuring a continuous water supply. At Livam Solutions Ltd, we are 
          committed to helping individuals, organizations, and communities achieve water 
          independence through professional borehole drilling and comprehensive water solutions.
        </p>
        <p>
          Our mission is simple: to provide sustainable, affordable, and efficient 
          water solutions that meet the unique needs of every client. We understand 
          that access to water is not just a convenience, it is a necessity that directly 
          impacts health, agriculture, education, economic growth, and overall quality of life. 
          That is why we approach every project with dedication, technical expertise, 
          and a commitment to excellence.
        </p>
        <p>
          Over the years, we have earned the trust of clients across various sectors, 
          including residential developments, commercial properties, agricultural farms, 
          educational institutions, religious organizations, and government projects. 
          Our extensive portfolio reflects our ability to deliver solutions that are tailored 
          to specific water requirements while remaining cost-effective and environmentally responsible.
        </p>

        <p>
          This blog serves as a resource center where we will share valuable information about 
          borehole drilling, water management, water conservation, solar pumping systems, 
          industry regulations, maintenance tips, and the latest developments in Kenya's water 
          sector. Our goal is to educate, inform, and empower our readers with practical 
          knowledge that helps them make better decisions regarding their water needs.
        </p>
      </div>

      {/* Statistics */}
      <div className="row text-center mb-5">

        <div className="col-md-4 mb-3" data-aos="zoom-in">
          <div className="card shadow border-0 p-4">
            <h2 style={{ color: "#01327b" }}>5+</h2>
            <p>Years Experience</p>
          </div>
        </div>

        <div className="col-md-4 mb-3" data-aos="zoom-in">
          <div className="card shadow border-0 p-4">
            <h2 style={{ color: "#01327b" }}>172</h2>
            <p>Boreholes Drilled</p>
          </div>
        </div>

        <div className="col-md-4 mb-3" data-aos="zoom-in">
          <div className="card shadow border-0 p-4">
            <h2 style={{ color: "#01327b" }}>257</h2>
            <p>Completed Projects</p>
          </div>
        </div>

      </div>

      {/* Services */}
      <div
        className="card shadow border-0 p-4 mb-5"
        data-aos="fade-up"
      >
        <h3 className="mb-3">
          🛠️ Comprehensive Water Solutions
        </h3>

        <ul>
          <li>Site survey and water consultancy</li>
          <li>Borehole drilling and casing</li>
          <li>Gravel packing services</li>
          <li>Pump installation and maintenance</li>
          <li>Water testing and treatment</li>
          <li>Borehole rehabilitation</li>
          <li>Water storage solutions</li>
        </ul>

        <p>
          We provide complete end-to-end water solutions for homes,
          institutions, farms, and businesses.
        </p>
      </div>
      {/* Articles */}
<div className="text-center mb-5" data-aos="fade-up">
  <h1 className="fw-bold" style={{ color: "#01327b" }}>
    Knowledge Center
  </h1>

  <p className="lead text-muted fw-bold">
    Expert insights, practical guides, and industry updates on borehole drilling,
    water solutions and sustainable water management across Kenya.
  </p>
</div>

      {/* Blog Cards */}
      <section className="py-4">

        <div className="row g-4">

          {blogs.map((blog, index) => (
            <div
              className="col-md-4"
              key={index}
              data-aos="fade-up"
            >
              <div className="card shadow border-0 h-100 p-4">

                <h5
                  className="fw-bold mb-3"
                  style={{ color: "#01327b" }}
                >
                  {blog.title}
                </h5>

                <p
                  className="text-muted"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {expanded === index
                    ? blog.content
                    : `${blog.content.substring(0, 180)}...`}
                </p>

                <Link to={`/blog/${blog.slug}`} className="btn btn-primary mt-auto"
>
  Read More
</Link>

              </div>
            </div>
          ))}

        </div>

      </section>

      {/* Why Choose Us */}
      <div
        className="card shadow border-0 p-4 mt-5"
        data-aos="fade-up"
      >
        <h3>🤝 Why Choose Livam Solutions Ltd?</h3>

        <ul>
          <li>Experienced and professional team</li>
          <li>Modern drilling equipment</li>
          <li>Affordable pricing</li>
          <li>Timely project delivery</li>
          <li>Customized water solutions</li>
          <li>Nationwide service coverage</li>
        </ul>

        <p>
          Every project receives dedicated planning and execution to
          deliver sustainable and reliable water access.
        </p>
        <p>
          Thank you for visiting the Livam Solutions Ltd blog. We invite you 
          to explore our articles, learn more about our services, and discover 
          how professional water solutions can transform your home, farm, institution, 
          or business. If you are considering a borehole project or need expert advice on 
          water solutions anywhere in Kenya, our team is ready to assist you every step of the way.
        </p>
      </div>

    </div>
  );
};

export default Blog;