
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ProjectCardProps } from "@/components/ProjectCard";
import { Separator } from "@/components/ui/separator";

// Extended project details that include more information than the card
interface ProjectDetailData extends ProjectCardProps {
  fullDescription?: string;
  features?: string[];
  challenges?: string[];
  outcomes?: string[];
}

const projectsData: Record<string, ProjectDetailData> = {
  "virtual-try-on": {
    id: "virtual-try-on",
    title: "Virtual Try-On System",
    description: "Smart mirror system allowing shoppers to virtually try on clothes using AI and computer vision.",
    image: "/lovable-uploads/0673bad2-da23-49b2-8c37-137f2ad5e289.png",
    technologies: ["Computer Vision", "AR Technology", "Real-time Rendering", "Machine Learning", "Pose Estimation"],
    fullDescription: "Our Virtual Try-On System revolutionizes the retail shopping experience by allowing customers to try on clothes virtually using a smart mirror. The system uses advanced computer vision and augmented reality to overlay clothing items on the customer's body in real-time, creating a seamless and engaging shopping experience.",
    features: [
      "Real-time clothes overlay on customer's body",
      "Automatic size recommendation based on body measurements",
      "Gesture controls for browsing different items",
      "Social media sharing capabilities",
      "Integration with store inventory system"
    ],
    challenges: [
      "Accurate body pose estimation in various lighting conditions",
      "Real-time rendering of clothing textures and physics",
      "Seamless integration with existing retail systems",
      "Creating intuitive user experience for all age groups"
    ],
    outcomes: [
      "30% increase in customer engagement in pilot stores",
      "Reduced return rates due to better size selection",
      "Higher conversion rates compared to traditional shopping",
      "Enhanced brand perception as technologically innovative"
    ]
  },
  "traffic-violations": {
    id: "traffic-violations",
    title: "Traffic Violation Detection",
    description: "AI-powered system for detecting traffic violations, particularly at red lights and intersections.",
    image: "/lovable-uploads/b3b90ac5-dca8-437c-bbdf-1973cd95a8eb.png",
    cities: ["Tehran", "Shiraz"],
    technologies: ["Computer Vision", "AI", "Image Recognition", "Deep Learning", "License Plate Recognition"],
    fullDescription: "Our Traffic Violation Detection system uses artificial intelligence and computer vision to automatically detect and document traffic violations at intersections. The system is capable of identifying various violations including red light running, illegal turns, and speeding, generating evidence-quality footage and reports for law enforcement.",
    features: [
      "Automated detection of multiple violation types",
      "High-resolution cameras with night vision capability",
      "Automatic license plate recognition (LPR) with 99.8% accuracy",
      "Secure digital evidence storage and management",
      "Integration with municipal traffic management systems"
    ],
    challenges: [
      "Processing large volumes of video data in real-time",
      "Maintaining accuracy in adverse weather conditions",
      "Ensuring privacy compliance while capturing violations",
      "Developing robust algorithms for various traffic scenarios"
    ],
    outcomes: [
      "35% reduction in traffic violations at equipped intersections",
      "Improved traffic flow and reduced congestion",
      "Enhanced road safety with 28% fewer accidents",
      "Increased municipal revenue through violation enforcement"
    ]
  },
  "smart-parking": {
    id: "smart-parking",
    title: "Smart Parking System",
    description: "Intelligent parking management solution to optimize parking space utilization and improve user experience.",
    image: "/lovable-uploads/0e74f8e4-f3ea-4007-9d15-223b133ce2bc.png",
    cities: ["Isfahan"],
    technologies: ["IoT", "Computer Vision", "Mobile App", "Cloud Computing", "Real-time Analytics"],
    fullDescription: "Our Smart Parking System transforms urban parking management by combining IoT sensors, computer vision, and mobile technology to create a seamless parking experience. The system provides real-time parking availability, automated payment solutions, and comprehensive analytics for urban planners.",
    features: [
      "Real-time parking spot availability mapping",
      "Mobile app for finding and reserving parking spaces",
      "Automated payment processing and digital receipts",
      "License plate recognition for contactless entry/exit",
      "Comprehensive analytics dashboard for operators"
    ],
    challenges: [
      "Ensuring sensor reliability in outdoor conditions",
      "Creating scalable infrastructure for city-wide deployment",
      "Maintaining system accuracy during peak usage periods",
      "Integrating with legacy parking management systems"
    ],
    outcomes: [
      "40% reduction in time spent searching for parking",
      "Increased parking revenue through optimized space utilization",
      "Reduced traffic congestion in city centers",
      "Enhanced user satisfaction with urban parking experience"
    ]
  },
  "equipment-monitoring": {
    id: "equipment-monitoring",
    title: "Heavy Equipment Monitoring",
    description: "Advanced monitoring system for heavy machinery with wear detection and collision prevention to improve safety and efficiency.",
    image: "/lovable-uploads/12c6d2c7-f631-49aa-95ac-a8cea09a870e.png",
    technologies: ["Thermal Imaging", "AI Detection", "Predictive Maintenance", "IoT Sensors", "Data Analytics"],
    fullDescription: "Our Heavy Equipment Monitoring system uses thermal imaging and AI to detect potential equipment failures before they occur. By continuously monitoring critical components and analyzing performance data, the system can predict maintenance needs and prevent costly breakdowns.",
    features: [
      "Real-time thermal analysis of equipment components",
      "AI-powered anomaly detection for early warning",
      "Predictive maintenance scheduling recommendations",
      "Comprehensive equipment health dashboards",
      "Integration with maintenance management systems"
    ],
    challenges: [
      "Developing reliable algorithms for diverse equipment types",
      "Creating robust sensors for harsh industrial environments",
      "Processing large volumes of sensor data efficiently",
      "Training AI models to recognize subtle failure indicators"
    ],
    outcomes: [
      "45% reduction in unplanned equipment downtime",
      "Significant decrease in maintenance costs",
      "Extended equipment lifespan through optimized maintenance",
      "Enhanced workplace safety through proactive issue resolution"
    ]
  },
  "collision-warning": {
    id: "collision-warning",
    title: "Collision Warning System",
    description: "Intelligent system that uses 360° cameras to monitor equipment surroundings and warn operators of potential collisions.",
    image: "/lovable-uploads/53ae4415-cee5-4ef6-9844-542e6ebaac95.png",
    technologies: ["360° Cameras", "Real-time Monitoring", "Distance Detection", "Operator Alerts", "Computer Vision"],
    fullDescription: "Our Collision Warning System creates a safety bubble around heavy equipment and industrial vehicles. Using 360° cameras and advanced object detection algorithms, the system continuously monitors the surrounding environment and provides immediate alerts to operators when collision risks are detected.",
    features: [
      "Full 360° monitoring coverage around equipment",
      "Real-time distance calculation to obstacles",
      "Visual and audible alert system for operators",
      "Object classification to prioritize collision risks",
      "Event recording for safety review and training"
    ],
    challenges: [
      "Ensuring system responsiveness with minimal latency",
      "Distinguishing between actual risks and normal operations",
      "Maintaining accuracy in various lighting conditions",
      "Designing intuitive operator interfaces"
    ],
    outcomes: [
      "65% reduction in workplace collision accidents",
      "Increased operator confidence and productivity",
      "Lower insurance costs for industrial operations",
      "Comprehensive safety compliance documentation"
    ]
  },
  "construction-vehicles": {
    id: "construction-vehicles",
    title: "Construction Vehicle Tracking",
    description: "System for tracking and managing construction vehicles to prevent unauthorized construction and improve site management.",
    image: "/lovable-uploads/4c86f9aa-f8eb-4ba2-a13f-cac010de6346.png",
    technologies: ["Vehicle Tracking", "Computer Vision", "Reporting", "GPS Integration", "Mobile Management"],
    fullDescription: "Our Construction Vehicle Tracking system monitors and manages the movement and operation of construction vehicles across multiple sites. The system prevents unauthorized use, optimizes vehicle utilization, and provides comprehensive activity reports for project management.",
    features: [
      "Real-time GPS tracking and geofencing",
      "Computer vision for vehicle identification",
      "Automated activity logging and reporting",
      "Unauthorized use alerts and prevention",
      "Fleet management and scheduling optimization"
    ],
    challenges: [
      "Creating reliable tracking in areas with poor GPS signal",
      "Developing robust hardware for construction environments",
      "Managing battery life for long-term deployment",
      "Integrating with various vehicle types and models"
    ],
    outcomes: [
      "50% reduction in unauthorized equipment use",
      "Improved fleet utilization and resource allocation",
      "Enhanced project management with accurate equipment data",
      "Reduced fuel consumption and maintenance costs"
    ]
  },
  "stationary-violations": {
    id: "stationary-violations",
    title: "Stationary Traffic Violations",
    description: "System for detecting and reporting stationary traffic violations such as illegal parking and unauthorized stops.",
    image: "/lovable-uploads/0af53225-85a5-427a-bec1-d75f1b3f1b48.png",
    cities: ["Tehran"],
    technologies: ["Mobile Monitoring", "License Plate Recognition", "Real-time Reporting", "Cloud Processing", "Digital Evidence"],
    fullDescription: "Our Stationary Traffic Violations system combines mobile cameras with advanced license plate recognition to detect and document parking violations. The system can be deployed on enforcement vehicles or fixed locations to continuously monitor parking zones and generate violation reports automatically.",
    features: [
      "Automated detection of illegal parking and stopping",
      "High-accuracy license plate recognition",
      "Digital evidence capture with timestamp and location",
      "Wireless transmission to central enforcement system",
      "Integration with citation and payment processing"
    ],
    challenges: [
      "Processing visual data in various lighting and weather conditions",
      "Distinguishing between legal and illegal parking scenarios",
      "Ensuring mobile hardware reliability in urban environments",
      "Managing large volumes of violation data efficiently"
    ],
    outcomes: [
      "60% increase in parking compliance in monitored areas",
      "More efficient allocation of enforcement personnel",
      "Improved traffic flow in urban centers",
      "Increased revenue from violation enforcement"
    ]
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectsData[projectId] : null;

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Log if project is not found
    if (!project && projectId) {
      console.error(`Project not found with ID: ${projectId}`);
    }
  }, [projectId, project]);

  // If project not found, display error message
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-background dark">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold mb-6">Project Not Found</h1>
            <p className="text-xl mb-8">Sorry, we couldn't find the project you're looking for.</p>
            <Link to="/projects">
              <Button size="lg">Back to All Projects</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get project keys for navigation
  const projectKeys = Object.keys(projectsData);
  const currentIndex = projectKeys.findIndex(key => key === projectId);
  const prevProject = currentIndex > 0 ? projectsData[projectKeys[currentIndex - 1]] : null;
  const nextProject = currentIndex < projectKeys.length - 1 ? projectsData[projectKeys[currentIndex + 1]] : null;

  return (
    <div className="min-h-screen flex flex-col bg-background dark">
      <Header />

      <main className="flex-1">
        <Hero
          title={project.title}
          subtitle={project.description}
          ctaText="Contact Us"
          ctaLink="/contact"
        />

        {/* Project Details */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Main Content - 3/5 width on large screens */}
              <div className="lg:col-span-3">
                <div className="mb-8 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>

                <h2 className="text-2xl font-bold mb-6">Overview</h2>
                <p className="text-lg mb-8">
                  {project.fullDescription}
                </p>

                {project.features && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                    <ul className="list-disc pl-6 space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="text-lg">{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.challenges && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Challenges</h2>
                    <ul className="list-disc pl-6 space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="text-lg">{challenge}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.outcomes && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Outcomes</h2>
                    <ul className="list-disc pl-6 space-y-2">
                      {project.outcomes.map((outcome, index) => (
                        <li key={index} className="text-lg">{outcome}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sidebar - 2/5 width on large screens */}
              <div className="lg:col-span-2">
                <div className="bg-card p-8 rounded-lg sticky top-24">
                  <h3 className="text-xl font-bold mb-4">Project Details</h3>

                  <Separator className="my-4" />

                  {project.cities && project.cities.length > 0 && (
                    <>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Deployment Locations</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.cities.map((city, index) => (
                            <Badge key={index} variant="outline" className="bg-accent text-accent-foreground">
                              {city}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Separator className="my-4" />
                    </>
                  )}

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="bg-secondary/20 text-secondary-foreground">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="mt-8">
                    <Link to="/contact">
                      <Button className="w-full">Request More Information</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Navigation */}
            <div className="mt-16 flex flex-wrap justify-between items-center">
              {prevProject ? (
                <Link to={`/projects/${prevProject.id}`} className="flex-1">
                  <Button variant="outline" className="flex items-center space-x-2">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Previous: {prevProject.title}</span>
                  </Button>
                </Link>
              ) : (
                <div className="flex-1"></div>
              )}

              <div className="mx-4 my-2">
                <Link to="/projects">
                  <Button variant="ghost">All Projects</Button>
                </Link>
              </div>

              {nextProject ? (
                <Link to={`/projects/${nextProject.id}`} className="flex-1 text-right">
                  <Button variant="outline" className="flex items-center space-x-2 ml-auto">
                    <span>Next: {nextProject.title}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              ) : (
                <div className="flex-1"></div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
