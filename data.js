// Demo data for Skill Bridge (Sprint 1)
var SKILLBRIDGE_DATA = {
  workers: [
    { id: 1, name: 'Ali Khan', service: 'Plumber', experience: 5, rating: 4.7, bio: 'Experienced in residential plumbing.', availability: ['2026-03-10','2026-03-11'], photo: 'https://i.pravatar.cc/150?img=12' },
    { id: 2, name: 'Rashid Khan', service: 'Plumber', experience: 6, rating: 4.8, bio: 'Specialist in leak repairs and pipe fitting.', availability: ['2026-03-09','2026-03-12'], photo: 'https://i.pravatar.cc/150?img=13' },
    { id: 3, name: 'Ahmed Ali', service: 'Plumber', experience: 4, rating: 4.5, bio: 'Emergency plumbing services.', availability: ['2026-03-11','2026-03-13'], photo: 'https://i.pravatar.cc/150?img=14' },
    { id: 4, name: 'Fatima Noor', service: 'Plumber', experience: 7, rating: 4.9, bio: 'Renovation and installation expert.', availability: ['2026-03-08','2026-03-14'], photo: 'https://i.pravatar.cc/150?img=15' },
    { id: 5, name: 'Bilal Hussain', service: 'Plumber', experience: 3, rating: 4.3, bio: 'Affordable and quick fixes.', availability: ['2026-03-10','2026-03-15'], photo: 'https://i.pravatar.cc/150?img=16' },
    { id: 6, name: 'Noor Malik', service: 'Plumber', experience: 8, rating: 4.9, bio: 'Commercial plumbing and maintenance.', availability: ['2026-03-12','2026-03-16'], photo: 'https://i.pravatar.cc/150?img=17' },
    { id: 7, name: 'Zain Khan', service: 'Plumber', experience: 5, rating: 4.6, bio: 'Bathroom and kitchen plumbing.', availability: ['2026-03-13','2026-03-17'], photo: 'https://i.pravatar.cc/150?img=18' },
    { id: 8, name: 'Maria Ali', service: 'Plumber', experience: 2, rating: 4.2, bio: 'Small jobs and maintenance.', availability: ['2026-03-11','2026-03-18'], photo: 'https://i.pravatar.cc/150?img=19' },
    { id: 9, name: 'Sara Ahmed', service: 'Electrician', experience: 7, rating: 4.9, bio: 'Licensed electrician, fast troubleshooting.', availability: ['2026-03-09','2026-03-12'], photo: 'https://i.pravatar.cc/150?img=20' },
    { id: 10, name: 'Tariq Jamil', service: 'Electrician', experience: 12, rating: 4.8, bio: 'Expert in residential wiring and smart home setups.', availability: ['2026-03-10','2026-03-11'], photo: 'https://i.pravatar.cc/150?img=33' },
    { id: 11, name: 'Omar Farooq', service: 'Electrician', experience: 5, rating: 4.6, bio: 'Commercial electrical installations.', availability: ['2026-03-12','2026-03-14'], photo: 'https://i.pravatar.cc/150?img=34' },
    { id: 12, name: 'Usman Ali', service: 'Electrician', experience: 8, rating: 4.7, bio: 'Panel upgrades and lighting.', availability: ['2026-03-11','2026-03-15'], photo: 'https://i.pravatar.cc/150?img=35' },
    { id: 13, name: 'Ayesha Khan', service: 'Electrician', experience: 4, rating: 4.5, bio: 'Appliance repair and minor electrical fixes.', availability: ['2026-03-13','2026-03-16'], photo: 'https://i.pravatar.cc/150?img=36' },
    { id: 14, name: 'Hassan Raza', service: 'Electrician', experience: 10, rating: 4.9, bio: 'Heavy-duty wiring and generator setups.', availability: ['2026-03-14','2026-03-18'], photo: 'https://i.pravatar.cc/150?img=37' },
    { id: 15, name: 'Kashif Mehmood', service: 'Electrician', experience: 6, rating: 4.4, bio: 'Affordable electrical services.', availability: ['2026-03-09','2026-03-11'], photo: 'https://i.pravatar.cc/150?img=38' },
    { id: 16, name: 'Noman Tariq', service: 'Electrician', experience: 9, rating: 4.8, bio: 'Specialist in outdoor and security lighting.', availability: ['2026-03-12','2026-03-15'], photo: 'https://i.pravatar.cc/150?img=39' },
    { id: 17, name: 'Zahra Batool', service: 'Electrician', experience: 3, rating: 4.3, bio: 'Quick troubleshooting and repairs.', availability: ['2026-03-10','2026-03-14'], photo: 'https://i.pravatar.cc/150?img=40' },

    { id: 18, name: 'John Doe', service: 'Carpenter', experience: 4, rating: 4.4, bio: 'Custom furniture and repairs.', availability: ['2026-03-11','2026-03-13'], photo: 'https://i.pravatar.cc/150?img=21' },
    { id: 19, name: 'Wasim Akram', service: 'Carpenter', experience: 15, rating: 4.9, bio: 'Master carpenter with expertise in wooden structures.', availability: ['2026-03-10','2026-03-12'], photo: 'https://i.pravatar.cc/150?img=41' },
    { id: 20, name: 'Arsalan Baig', service: 'Carpenter', experience: 6, rating: 4.6, bio: 'Cabinet making and remodeling.', availability: ['2026-03-13','2026-03-15'], photo: 'https://i.pravatar.cc/150?img=42' },
    { id: 21, name: 'Kamran Akmal', service: 'Carpenter', experience: 8, rating: 4.7, bio: 'Expert in door and window framing.', availability: ['2026-03-09','2026-03-14'], photo: 'https://i.pravatar.cc/150?img=43' },
    { id: 22, name: 'Sana Javed', service: 'Carpenter', experience: 5, rating: 4.5, bio: 'Wood polishing and restoration.', availability: ['2026-03-11','2026-03-16'], photo: 'https://i.pravatar.cc/150?img=44' },
    { id: 23, name: 'Rizwan Ahmed', service: 'Carpenter', experience: 11, rating: 4.8, bio: 'Custom woodwork for luxury homes.', availability: ['2026-03-12','2026-03-17'], photo: 'https://i.pravatar.cc/150?img=45' },
    { id: 24, name: 'Farhan Saeed', service: 'Carpenter', experience: 7, rating: 4.6, bio: 'General carpentry and repairs.', availability: ['2026-03-10','2026-03-13'], photo: 'https://i.pravatar.cc/150?img=46' },
    { id: 25, name: 'Ali Zafar', service: 'Carpenter', experience: 9, rating: 4.8, bio: 'Specialist in built-in wardrobes.', availability: ['2026-03-14','2026-03-18'], photo: 'https://i.pravatar.cc/150?img=47' },
    { id: 26, name: 'Bilal Saeed', service: 'Carpenter', experience: 4, rating: 4.2, bio: 'Affordable furniture fixes.', availability: ['2026-03-11','2026-03-15'], photo: 'https://i.pravatar.cc/150?img=48' },

    { id: 27, name: 'Ravi Kumar', service: 'Mechanic', experience: 6, rating: 4.8, bio: 'Vehicle diagnostics and repairs.', availability: ['2026-03-08','2026-03-14'], photo: 'https://i.pravatar.cc/150?img=22' },
    { id: 28, name: 'Adnan Sami', service: 'Mechanic', experience: 12, rating: 4.9, bio: 'Expert in German cars.', availability: ['2026-03-10','2026-03-12'], photo: 'https://i.pravatar.cc/150?img=49' },
    { id: 29, name: 'Imran Hashmi', service: 'Mechanic', experience: 8, rating: 4.7, bio: 'Engine overhauls and tuning.', availability: ['2026-03-11','2026-03-15'], photo: 'https://i.pravatar.cc/150?img=50' },
    { id: 30, name: 'Salman Khan', service: 'Mechanic', experience: 5, rating: 4.6, bio: 'Brake and suspension specialist.', availability: ['2026-03-09','2026-03-13'], photo: 'https://i.pravatar.cc/150?img=51' },
    { id: 31, name: 'Shahrukh Khan', service: 'Mechanic', experience: 14, rating: 4.9, bio: 'Master mechanic for all vehicles.', availability: ['2026-03-12','2026-03-16'], photo: 'https://i.pravatar.cc/150?img=52' },
    { id: 32, name: 'Aamir Khan', service: 'Mechanic', experience: 7, rating: 4.7, bio: 'AC and electrical systems repair.', availability: ['2026-03-13','2026-03-17'], photo: 'https://i.pravatar.cc/150?img=53' },
    { id: 33, name: 'Saif Ali', service: 'Mechanic', experience: 9, rating: 4.8, bio: 'Transmission and clutch expert.', availability: ['2026-03-10','2026-03-14'], photo: 'https://i.pravatar.cc/150?img=54' },
    { id: 34, name: 'Hrithik Roshan', service: 'Mechanic', experience: 4, rating: 4.5, bio: 'Quick lube and oil changes.', availability: ['2026-03-11','2026-03-15'], photo: 'https://i.pravatar.cc/150?img=55' },
    { id: 35, name: 'Ranbir Kapoor', service: 'Mechanic', experience: 6, rating: 4.6, bio: 'General car maintenance.', availability: ['2026-03-14','2026-03-18'], photo: 'https://i.pravatar.cc/150?img=56' }
  ]
};
