import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, Truck, Gift } from 'lucide-react';

const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('premium');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      description: 'Perfect for beginners starting their fitness journey',
      monthlyPrice: 29,
      yearlyPrice: 299,
      features: [
        'Monthly protein powder delivery',
        'Basic workout guides',
        'Email support',
        'Access to community',
        'Cancel anytime'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Most popular choice for serious fitness enthusiasts',
      monthlyPrice: 49,
      yearlyPrice: 499,
      features: [
        'Monthly protein + creatine delivery',
        'Premium workout programs',
        'Nutrition consultation',
        'Priority support',
        'Exclusive member discounts',
        'Free shipping',
        'Cancel anytime'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'elite',
      name: 'Elite',
      description: 'Ultimate package for peak performance athletes',
      monthlyPrice: 79,
      yearlyPrice: 799,
      features: [
        'Full supplement stack delivery',
        'Personalized training plans',
        '1-on-1 coaching sessions',
        '24/7 priority support',
        'Exclusive elite products',
        'Free express shipping',
        'Equipment discounts',
        'Cancel anytime'
      ],
      popular: false,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const benefits = [
    {
      icon: Truck,
      title: 'Free Delivery',
      description: 'Never run out of supplements with automatic monthly delivery'
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'Premium supplements tested for purity and potency'
    },
    {
      icon: Gift,
      title: 'Member Perks',
      description: 'Exclusive discounts and early access to new products'
    },
    {
      icon: Zap,
      title: 'Flexible Plans',
      description: 'Customize your delivery schedule and cancel anytime'
    }
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez',
      plan: 'Premium',
      content: 'The convenience of having my supplements delivered monthly is incredible. Never miss a dose!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1581122583802-9e2afdc5ab7d'
    },
    {
      name: 'Ryan Thompson',
      plan: 'Elite',
      content: 'The personalized coaching and supplement stack has transformed my training completely.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1581122583802-9e2afdc5ab7d'
    }
  ];

  const getPrice = (plan) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (plan) => {
    const monthlyTotal = plan.monthlyPrice * 12;
    const yearlySavings = monthlyTotal - plan.yearlyPrice;
    return yearlySavings;
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Never Miss a Dose
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Get premium supplements delivered to your door every month. Choose your perfect plan and maintain peak performance.
            </p>
            <div className="flex items-center justify-center space-x-4 pt-4">
              <div className="flex items-center space-x-2 text-purple-200">
                <Truck className="w-5 h-5" />
                <span>Free Delivery</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-200">
                <Shield className="w-5 h-5" />
                <span>Quality Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-200">
                <Zap className="w-5 h-5" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-12 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="bg-gray-700 p-1 rounded-xl">
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    billingCycle === 'monthly'
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all relative ${
                    billingCycle === 'yearly'
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Yearly
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gray-800 rounded-2xl p-8 border-2 transition-all ${
                  selectedPlan === plan.id
                    ? 'border-purple-500 shadow-xl shadow-purple-500/20 scale-105'
                    : 'border-gray-700 hover:border-gray-600'
                } ${plan.popular ? 'md:scale-110' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 inset-x-0 flex justify-center">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-4xl font-bold text-white">${getPrice(plan)}</span>
                      <span className="text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-green-400 text-sm mt-2">
                        Save ${getSavings(plan)} per year
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full py-4 rounded-xl font-semibold transition-all ${
                      selectedPlan === plan.id
                        ? `bg-gradient-to-r ${plan.color} text-white`
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {selectedPlan === plan.id ? 'Selected' : 'Choose Plan'}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Selected Plan Checkout */}
          {selectedPlan && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 max-w-2xl mx-auto bg-gray-800 rounded-2xl p-8 border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Complete Your Subscription
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-700 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-white">
                      {plans.find(p => p.id === selectedPlan)?.name} Plan
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {billingCycle === 'monthly' ? 'Monthly' : 'Yearly'} billing
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-purple-400">
                      ${getPrice(plans.find(p => p.id === selectedPlan))}
                    </span>
                    <p className="text-gray-400 text-sm">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
                >
                  Start My Subscription
                </motion.button>

                <p className="text-gray-400 text-sm text-center">
                  Cancel anytime. No hidden fees. First delivery in 3-5 business days.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Subscription?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              More than just supplements - it's a complete fitness support system
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Subscribers Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 p-8 rounded-2xl border border-gray-700"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-purple-400 text-sm">{testimonial.plan} Subscriber</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubscriptionPage;