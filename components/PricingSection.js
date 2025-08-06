'use client'

import { useState } from 'react'
import { FiCheck } from 'react-icons/fi'

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: 'BRILLIANT BASIC',
      monthlyPrice: 19,
      quarterlyPrice: 57, // 19 * 3
      annualPrice: 228, // 19 * 12
      features: [
        'Automated Outage Notifications',
        'Rapid Response Time',
        'Regular Performance Tuning',
        'Hassle-Free Remote Updates',
        'Advanced Metrics & Reporting',
        'Discounted Support'
      ],
      bestFor: [
        '5 Or Fewer Access Points',
        '1 Or Fewer VLANs',
        'Low-To-Mid Firewall Protection'
      ],
      hasDropdown: true,
      buttonText: 'SUBSCRIBE'
    },
    {
      name: 'BRILLIANT PLUS',
      monthlyPrice: 27,
      quarterlyPrice: 81, // 27 * 3
      annualPrice: 324, // 27 * 12
      features: [
        'Automated Outage Notifications',
        'Rapid Response Time',
        'Regular Performance Tuning',
        'Hassle-Free Remote Updates',
        'Advanced Metrics & Reporting',
        'Discounted Support'
      ],
      bestFor: [
        '6 Or More Access Points',
        '2 Or More VLANs',
        'Mid-To-High Firewall Protection'
      ],
      hasDropdown: true,
      buttonText: 'SUBSCRIBE'
    },
    {
      name: 'BRILLIANT CUSTOM',
      monthlyPrice: null,
      quarterlyPrice: null,
      annualPrice: null,
      features: [
        'Automated Outage Notifications',
        'Rapid Response Time',
        'Regular Performance Tuning',
        'Hassle-Free Remote Updates',
        'Advanced Metrics & Reporting',
        'Discounted Support'
      ],
      bestFor: [
        '10 Or More Access Points',
        '4 Or More VLANs',
        'Custom Firewall Protection'
      ],
      hasDropdown: false,
      buttonText: 'INQUIRE'
    }
  ]

  const getPrice = (plan) => {
    if (isAnnual) {
      return plan.annualPrice
    } else {
      return plan.quarterlyPrice
    }
  }

  const getPeriodText = () => {
    return isAnnual ? 'every 12 months' : 'every 3 months'
  }

  const getMonthlyDisplay = (plan) => {
    if (!plan.monthlyPrice) return null
    if (isAnnual) {
      return `$${plan.monthlyPrice}/mo`
    } else {
      return `$${plan.monthlyPrice}/mo`
    }
  }

  return (
    <div className="min-h-screen bg-dark-bg py-12 px-4 sm:px-6 lg:px-8">
      {/* Navigation Bar */}
      <nav className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center justify-between">
          <div className="flex space-x-8 text-sm font-medium">
            <a href="#" className="text-white hover:text-accent-blue transition-colors">HOME</a>
            <a href="#" className="text-white hover:text-accent-blue transition-colors">TECH</a>
            <a href="#" className="text-white hover:text-accent-blue transition-colors">APPROACH</a>
            <a href="#" className="text-white hover:text-accent-blue transition-colors">MAINTENANCE</a>
            <a href="#" className="text-white hover:text-accent-blue transition-colors">TEAM</a>
            <a href="#" className="text-white hover:text-accent-blue transition-colors">BLOG</a>
          </div>
          <button className="bg-transparent border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-dark-bg transition-colors">
            GET STARTED
          </button>
        </div>
      </nav>

      {/* Pricing Toggle */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex justify-center">
          <div className="bg-card-bg rounded-full p-1 flex items-center">
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isAnnual
                  ? 'bg-white text-dark-bg'
                  : 'text-white hover:text-accent-blue'
              }`}
            >
              ANNUAL
            </button>
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !isAnnual
                  ? 'bg-white text-dark-bg'
                  : 'text-white hover:text-accent-blue'
              }`}
            >
              QUARTERLY
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-card-bg rounded-lg p-8 border border-gray-800 hover:animate-glow transition-all duration-300"
            >
              {/* Plan Name and Price */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                {plan.monthlyPrice && (
                  <div className="bg-white text-dark-bg px-4 py-2 rounded-md font-semibold">
                    {getMonthlyDisplay(plan)}
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <FiCheck className="text-accent-blue flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Best For Section */}
              <div className="mb-8">
                <h4 className="font-bold text-white mb-3">BEST FOR</h4>
                <ul className="space-y-2">
                  {plan.bestFor.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent-blue rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Annual/Quarterly Price Display */}
              {plan.monthlyPrice && (
                <div className="text-center mb-6">
                  <p className="text-gray-400 text-sm">
                    ${getPrice(plan)} {getPeriodText()}
                  </p>
                </div>
              )}

              {/* Call to Action */}
              <div className="space-y-3">
                {plan.hasDropdown && (
                  <select className="w-full bg-transparent border border-gray-600 text-white rounded-md px-4 py-3 text-sm focus:outline-none focus:border-accent-blue">
                    <option>Select Cameras</option>
                    <option>1-5 Cameras</option>
                    <option>6-10 Cameras</option>
                    <option>10+ Cameras</option>
                  </select>
                )}
                <button className="w-full bg-transparent border border-white text-white py-3 rounded-md hover:bg-white hover:text-dark-bg transition-colors font-medium">
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PricingSection