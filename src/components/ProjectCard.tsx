
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  cities?: string[];
  technologies?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  image,
  cities = [],
  technologies = []
}) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="flex flex-wrap gap-2 mt-2">
          {cities.map((city, index) => (
            <Badge key={index} variant="outline" className="bg-accent text-accent-foreground">
              {city}
            </Badge>
          ))}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <p className="text-sm">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-secondary/20 text-secondary-foreground">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter>
        <Link to={`/projects/${id}`} className="w-full">
          <Button variant="outline" className="w-full">Learn More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
