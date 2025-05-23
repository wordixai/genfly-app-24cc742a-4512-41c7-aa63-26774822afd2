import { Award, Coffee, Heart, Users } from "lucide-react"

const features = [
  {
    icon: Coffee,
    title: "Premium Beans",
    description: "We source our coffee beans directly from sustainable farms around the world"
  },
  {
    icon: Award,
    title: "Expert Roasting",
    description: "Our master roasters craft each blend to perfection using traditional techniques"
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every cup is prepared with passion and attention to detail by our skilled baristas"
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "We're committed to building connections and supporting our local community"
  }
]

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Crafting Coffee Excellence Since 2010
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At Brew & Bean, we believe that great coffee brings people together. Our journey began with a simple mission: 
              to serve exceptional coffee that not only tastes amazing but also supports sustainable farming practices and 
              strengthens our community.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              From our carefully selected single-origin beans to our expertly crafted blends, every cup tells a story of 
              passion, quality, and dedication to the art of coffee making.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Coffee shop interior"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About