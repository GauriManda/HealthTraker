import React, { useState } from 'react';
//import mindEaseLogo from '../assets/MindEase.png';
import image from '../assets/image1.png'; 
//import image2 from '../assets/image2.png'; 



function LandingPage() {
  const [email, setEmail] = useState('');
  const [showDemo, setShowDemo] = useState(false);
  const [sleepHours, setSleepHours] = useState(8);
  const [waterGlasses, setWaterGlasses] = useState(4);
  const [exerciseMinutes, setExerciseMinutes] = useState(30);
  const [studyMinutes, setStudyMinutes] = useState(120);
  const [screenHours, setScreenHours] = useState(4);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your interest! We'll send updates to ${email}`);
    setEmail('');
  };

  return (
    <div className="landing-page">
      

      <section className="hero">
        <div className="hero-content">
          <h1>Track Your Health. Improve Your Grades.</h1>
          <p>The all-in-one health habit tracker designed specifically for students.</p>
          <div className="hero-buttons">
            <button className="primary-button">Get Started Free</button>
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
        <div className="hero-image"><img src={image} alt="Health Tracker " />
        </div>
      </section>

      <section className="features" id="features">
        <h2>Features That Help You Stay Healthy</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <div className="feature-icon sleep-icon"></div>
            <h3>Sleep Tracking</h3>
            <p>Log your sleep hours and quality. Get personalized recommendations to improve your rest.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon water-icon"></div>
            <h3>Water Intake</h3>
            <p>Track your daily hydration with easy glass counting. Stay hydrated, stay focused.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon exercise-icon"></div>
            <h3>Exercise Logging</h3>
            <p>Record workouts, steps, and active minutes. Build healthy exercise habits.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon study-icon"></div>
            <h3>Study Sessions</h3>
            <p>Track your study time, breaks, and productivity. Optimize your learning with data-driven insights.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon screen-icon"></div>
            <h3>Screen Time</h3>
            <p>Monitor device usage and set healthy limits. Balance digital life with real-world activities.</p>
          </div>
        </div>
      </section>

      <section className="demo" id="demo">
        <h2>Track Your Health Within Seconds</h2>
        <p>Try our interactive demo to see how easy it is to track your health habits</p>
        
        <button 
          className="demo-button" 
          onClick={() => setShowDemo(!showDemo)}
        >
          {showDemo ? 'Hide Demo' : 'Show Demo'}
        </button>
        
        {showDemo && (
          <div className="demo-container">
            <div className="demo-controls">
              <div className="demo-control">
                <label>Sleep Hours</label>
                <div className="slider-container">
                  <input 
                    type="range" 
                    min="0" 
                    max="12" 
                    value={sleepHours} 
                    onChange={(e) => setSleepHours(e.target.value)} 
                  />
                  <span>{sleepHours} hours</span>
                </div>
              </div>
              
              <div className="demo-control">
                <label>Water Intake</label>
                <div className="slider-container">
                  <input 
                    type="range" 
                    min="0" 
                    max="12" 
                    value={waterGlasses} 
                    onChange={(e) => setWaterGlasses(e.target.value)} 
                  />
                  <span>{waterGlasses} glasses</span>
                </div>
              </div>
              
              <div className="demo-control">
                <label>Exercise</label>
                <div className="slider-container">
                  <input 
                    type="range" 
                    min="0" 
                    max="120" 
                    step="5" 
                    value={exerciseMinutes} 
                    onChange={(e) => setExerciseMinutes(e.target.value)} 
                  />
                  <span>{exerciseMinutes} minutes</span>
                </div>
              </div>
              
              <div className="demo-control">
                <label>Study Time</label>
                <div className="slider-container">
                  <input 
                    type="range" 
                    min="0" 
                    max="360" 
                    step="15" 
                    value={studyMinutes} 
                    onChange={(e) => setStudyMinutes(e.target.value)} 
                  />
                  <span>{studyMinutes} minutes</span>
                </div>
              </div>
              
              <div className="demo-control">
                <label>Screen Time</label>
                <div className="slider-container">
                  <input 
                    type="range" 
                    min="0" 
                    max="12" 
                    step="0.5" 
                    value={screenHours} 
                    onChange={(e) => setScreenHours(e.target.value)} 
                  />
                  <span>{screenHours} hours</span>
                </div>
              </div>
            </div>
            
            <div className="demo-visualization">
              <h3>Today's Progress</h3>
              <div className="progress-bars">
                <div className="progress-item">
                  <div className="progress-label">Sleep</div>
                  <div className="progress-bar-container">
                    <div 
                      className="progress-bar sleep-bar" 
                      style={{ width: `${(sleepHours / 9) * 100}%` }}
                    ></div>
                  </div>
                  <div className="progress-target">{sleepHours}/9 hours</div>
                </div>
                
                <div className="progress-item">
                  <div className="progress-label">Water</div>
                  <div className="progress-bar-container">
                    <div 
                      className="progress-bar water-bar" 
                      style={{ width: `${(waterGlasses / 8) * 100}%` }}
                    ></div>
                  </div>
                  <div className="progress-target">{waterGlasses}/8 glasses</div>
                </div>
                
                <div className="progress-item">
                  <div className="progress-label">Exercise</div>
                  <div className="progress-bar-container">
                    <div 
                      className="progress-bar exercise-bar" 
                      style={{ width: `${(exerciseMinutes / 60) * 100}%` }}
                    ></div>
                  </div>
                  <div className="progress-target">{exerciseMinutes}/60 minutes</div>
                </div>
                
                <div className="progress-item">
                  <div className="progress-label">Study</div>
                  <div className="progress-bar-container">
                    <div 
                      className="progress-bar study-bar" 
                      style={{ width: `${(studyMinutes / 180) * 100}%` }}
                    ></div>
                  </div>
                  <div className="progress-target">{studyMinutes}/180 minutes</div>
                </div>
                
                <div className="progress-item">
                  <div className="progress-label">Screen</div>
                  <div className="progress-bar-container">
                    <div 
                      className="progress-bar screen-bar" 
                      style={{ width: `${(1 - (screenHours / 6)) * 100}%` }}
                    ></div>
                  </div>
                  <div className="progress-target">{screenHours}/6 hours</div>
                </div>
              </div>
              
              <div className="health-score">
                <h4>Your Health Score</h4>
                <div className="score-circle">
                  {Math.round(((sleepHours / 9) + (waterGlasses / 8) + (exerciseMinutes / 60) + (studyMinutes / 180) + (1 - (screenHours / 6))) / 5 * 100)}%
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="testimonials" id="testimonials">
  <h2>What Students Say</h2>
  <div className="testimonial-cards">
    
    <div className="testimonial-card">
      <div className="quote">"This app helped me establish a consistent sleep schedule during finals week. My grades improved significantly!"</div>
      <div className="student-info">
        <div className="student-avatar">
          <img src="/images/alex.jpg" alt="Alex Johnson" />
        </div>
        <div className="student-details">
          <div className="student-name">Alex Johnson</div>
          <div className="student-school">Stanford University</div>
        </div>
      </div>
    </div>

    <div className="testimonial-card">
      <div className="quote">"I never realized how dehydrated I was until I started tracking my water intake. I feel more alert in my classes now."</div>
      <div className="student-info">
        <div className="student-avatar">
          <img src="/images/maya.jpg" alt="Maya Patel" />
        </div>
        <div className="student-details">
          <div className="student-name">Maya Patel</div>
          <div className="student-school">NYU</div>
        </div>
      </div>
    </div>

    <div className="testimonial-card">
      <div className="quote">"The exercise tracking feature motivated me to take study breaks and move around. My concentration has improved tremendously."</div>
      <div className="student-info">
        <div className="student-avatar">
          <img src="/images/tyler.jpg" alt="Tyler Williams" />
        </div>
        <div className="student-details">
          <div className="student-name">Tyler Williams</div>
          <div className="student-school">UC Berkeley</div>
        </div>
      </div>
    </div>

    <div className="testimonial-card">
      <div className="quote">"Tracking my study sessions helped me identify my peak productivity hours. I've reduced my study time while improving my retention!"</div>
      <div className="student-info">
        <div className="student-avatar">
          <img src="/images/emma.jpg" alt="Emma Chen" />
        </div>
        <div className="student-details">
          <div className="student-name">Emma Chen</div>
          <div className="student-school">MIT</div>
        </div>
      </div>
    </div>

    <div className="testimonial-card">
      <div className="quote">"The screen time tracker made me realize how much time I was wasting online. Setting limits helped me focus on what really matters."</div>
      <div className="student-info">
        <div className="student-avatar">
          <img src="/images/jackson.jpg" alt="Jackson Kim" />
        </div>
        <div className="student-details">
          <div className="student-name">Jackson Kim</div>
          <div className="student-school">Georgetown University</div>
        </div>
      </div>
    </div>

  </div>
</section>

      <section className="signup" id="signup">
        <div className="signup-container">
          <h2>Ready to Start Your Health Journey?</h2>
          <p>Sign up to get early access and special student discounts.</p>
          
          <form className="signup-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Your university email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="primary-button">Get Started</button>
          </form>
          
          <div className="signup-benefits">
            <div className="benefit-item">✓ Free for students</div>
            <div className="benefit-item">✓ No credit card required</div>
            <div className="benefit-item">✓ Cancel anytime</div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">StudentHealth</div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#careers">Careers</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#guides">Health Guides</a></li>
                <li><a href="#research">Research</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">© 2025 StudentHealth. All rights reserved.</div>
          <div className="legal-links">
            <a href="#terms">Terms</a>
            <a href="#privacy">Privacy</a>
          </div>
        </div>
      </footer>

      
    </div>
  );
}

export default LandingPage;
