import React, { useState, useEffect } from "react";

import { useNavigate, useSearchParams } from "react-router";

import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";
import FeaturedMarathons from "./Componants/FeaturedMarathons";
import MarathonFilters from "./Componants/MarathonFilters";
import MarathonGrid from "./Componants/MarathonGrid";
import MarathonStats from "./Componants/MarathonStats";

const AllMarathons = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // State management
  const [user, setUser] = useState(null);
  const [marathons, setMarathons] = useState([]);
  const [filteredMarathons, setFilteredMarathons] = useState([]);
  const [featuredMarathons, setFeaturedMarathons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState(
    searchParams?.get("search") || ""
  );
  const [sortBy, setSortBy] = useState(searchParams?.get("sort") || "newest");
  const [filters, setFilters] = useState({
    distance: searchParams?.get("distance") || "all",
    difficulty: searchParams?.get("difficulty") || "all",
    priceRange: searchParams?.get("priceRange") || "all",
    registrationStatus: searchParams?.get("registrationStatus") || "all",
    dateFrom: searchParams?.get("dateFrom") || "",
    dateTo: searchParams?.get("dateTo") || "",
  });
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Mock data
  const mockMarathons = [
    {
      id: 1,
      title: "Boston Marathon 2025",
      date: "2025-04-21", //
      location: "Boston, MA",
      distance: "26.2 miles",
      price: 195,
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=500",
      registrationDeadline: "2025-03-15",
      availableSpots: 1500,
      totalSpots: 30000,
      difficulty: "Advanced",
      organizer: "Boston Athletic Association",
      description: `The Boston Marathon is the world's oldest annual marathon and one of the most prestigious running events globally.\n\nThis challenging course features the famous Heartbreak Hill and attracts elite runners from around the world.`,
      isFeatured: true,
      createdAt: "2024-12-01T10:00:00Z",
      registrationCount: 28500,
    },
    {
      id: 2,
      title: "New York City Marathon 2025",
      date: "2025-11-02",
      location: "New York, NY",
      distance: "26.2 miles",
      price: 255,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500",
      registrationDeadline: "2025-02-28",
      availableSpots: 2500,
      totalSpots: 50000,
      difficulty: "Intermediate",
      organizer: "New York Road Runners",
      description: `Experience the energy of running through all five boroughs of New York City.\n\nThis iconic marathon takes you past millions of cheering spectators through the heart of the Big Apple.`,
      isFeatured: true,
      createdAt: "2024-11-15T14:30:00Z",
      registrationCount: 47500,
    },
    {
      id: 3,
      title: "Chicago Marathon 2025",
      date: "2025-10-12",
      location: "Chicago, IL",
      distance: "26.2 miles",
      price: 175,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
      registrationDeadline: "2025-04-30",
      availableSpots: 8000,
      totalSpots: 45000,
      difficulty: "Intermediate",
      organizer: "Chicago Area Runners Association",
      description: `Run through the beautiful neighborhoods of Chicago with incredible crowd support.\n\nThis fast, flat course is perfect for personal records and Boston qualifying times.`,
      isFeatured: false,
      createdAt: "2024-11-20T09:15:00Z",
      registrationCount: 37000,
    },
    {
      id: 4,
      title: "Marine Corps Marathon 2025",
      date: "2025-10-26",
      location: "Washington, DC",
      distance: "26.2 miles",
      price: 165,
      image:
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500",
      registrationDeadline: "2025-05-15",
      availableSpots: 5000,
      totalSpots: 30000,
      difficulty: "Intermediate",
      organizer: "Marine Corps Marathon Organization",
      description: `Honor our military heroes while running past iconic monuments and memorials.\n\nKnown as 'The People's Marathon,' this event celebrates service and sacrifice.`,
      isFeatured: false,
      createdAt: "2024-12-05T16:45:00Z",
      registrationCount: 25000,
    },
    {
      id: 5,
      title: "Big Sur International Marathon 2025",
      date: "2025-04-27",
      location: "Big Sur, CA",
      distance: "26.2 miles",
      price: 225,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500",
      registrationDeadline: "2025-02-01",
      availableSpots: 800,
      totalSpots: 4500,
      difficulty: "Advanced",
      organizer: "Big Sur Marathon Foundation",
      description: `Run along one of the most scenic coastlines in the world.\n\nThis challenging course features stunning ocean views, redwood forests, and the iconic Bixby Creek Bridge.`,
      isFeatured: false,
      createdAt: "2024-10-30T11:20:00Z",
      registrationCount: 3700,
    },
    {
      id: 6,
      title: "Rock 'n' Roll Las Vegas Marathon 2025",
      date: "2025-11-16",
      location: "Las Vegas, NV",
      distance: "26.2 miles",
      price: 145,
      image:
        "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=500",
      registrationDeadline: "2025-09-30",
      availableSpots: 12000,
      totalSpots: 40000,
      difficulty: "Beginner",
      organizer: "Rock 'n' Roll Marathon Series",
      description: `Run the Las Vegas Strip at night with live music and entertainment.\n\nThis unique marathon experience combines running with the excitement of Las Vegas.`,
      isFeatured: false,
      createdAt: "2024-11-10T13:00:00Z",
      registrationCount: 28000,
    },
    {
      id: 7,
      title: "Honolulu Marathon 2025",
      date: "2025-12-14",
      location: "Honolulu, HI",
      distance: "26.2 miles",
      price: 185,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500",
      registrationDeadline: "2025-11-01",
      availableSpots: 15000,
      totalSpots: 35000,
      difficulty: "Intermediate",
      organizer: "Honolulu Marathon Association",
      description: `Experience paradise while running through beautiful Honolulu.\n\nThis marathon offers stunning ocean views, perfect weather, and the spirit of aloha.`,
      isFeatured: false,
      createdAt: "2024-12-08T08:30:00Z",
      registrationCount: 20000,
    },
    {
      id: 8,
      title: "Twin Cities Marathon 2025",
      date: "2025-10-05",
      location: "Minneapolis, MN",
      distance: "26.2 miles",
      price: 135,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500",
      registrationDeadline: "2025-08-15",
      availableSpots: 6000,
      totalSpots: 25000,
      difficulty: "Intermediate",
      organizer: "Twin Cities In Motion",
      description: `Run through the beautiful fall colors of Minneapolis and St. Paul.\n\nThis scenic course takes you along rivers, lakes, and through charming neighborhoods.`,
      isFeatured: false,
      createdAt: "2024-11-25T15:10:00Z",
      registrationCount: 19000,
    },
    {
      id: 9,
      title: "California International Marathon 2025",
      date: "2025-12-07",
      location: "Sacramento, CA",
      distance: "26.2 miles",
      price: 155,
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=500",
      registrationDeadline: "2025-10-15",
      availableSpots: 4000,
      totalSpots: 15000,
      difficulty: "Advanced",
      organizer: "Sacramento Running Association",
      description: `A fast, downhill Boston qualifier course through Northern California.\n\nThis point-to-point marathon is known for helping runners achieve their personal best times.`,
      isFeatured: false,
      createdAt: "2024-12-03T12:45:00Z",
      registrationCount: 11000,
    },
  ];

  // Initialize data
  useEffect(() => {
    const initializeData = async () => {
      setIsLoading(true);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setMarathons(mockMarathons);
      setFeaturedMarathons(mockMarathons?.filter((m) => m?.isFeatured));
      setFilteredMarathons(mockMarathons);
      setIsLoading(false);
    };

    initializeData();
  }, []);

  // Apply filters and search
  useEffect(() => {
    let filtered = [...marathons];

    // Search filter
    if (searchQuery) {
      filtered = filtered?.filter(
        (marathon) =>
          marathon?.title
            ?.toLowerCase()
            ?.includes(searchQuery?.toLowerCase()) ||
          marathon?.location
            ?.toLowerCase()
            ?.includes(searchQuery?.toLowerCase()) ||
          marathon?.organizer
            ?.toLowerCase()
            ?.includes(searchQuery?.toLowerCase())
      );
    }

    // Distance filter
    if (filters?.distance && filters?.distance !== "all") {
      filtered = filtered?.filter((marathon) => {
        if (filters?.distance === "marathon") {
          return marathon?.distance?.includes("26.2");
        }
        return marathon?.distance?.includes(filters?.distance);
      });
    }

    // Difficulty filter
    if (filters?.difficulty && filters?.difficulty !== "all") {
      filtered = filtered?.filter(
        (marathon) =>
          marathon?.difficulty?.toLowerCase() ===
          filters?.difficulty?.toLowerCase()
      );
    }

    // Price range filter
    if (filters?.priceRange && filters?.priceRange !== "all") {
      filtered = filtered?.filter((marathon) => {
        const price = marathon?.price;
        switch (filters?.priceRange) {
          case "0-50":
            return price <= 50;
          case "51-100":
            return price > 50 && price <= 100;
          case "101-200":
            return price > 100 && price <= 200;
          case "201+":
            return price > 200;
          default:
            return true;
        }
      });
    }

    // Registration status filter
    if (filters?.registrationStatus && filters?.registrationStatus !== "all") {
      filtered = filtered?.filter((marathon) => {
        const deadline = new Date(marathon.registrationDeadline);
        const now = new Date();
        const daysUntilDeadline = Math.ceil(
          (deadline - now) / (1000 * 60 * 60 * 24)
        );
        const availabilityPercentage =
          (marathon?.availableSpots / marathon?.totalSpots) * 100;

        switch (filters?.registrationStatus) {
          case "open":
            return deadline > now;
          case "closing-soon":
            return deadline > now && daysUntilDeadline <= 30;
          case "limited":
            return availabilityPercentage < 20;
          default:
            return true;
        }
      });
    }

    // Date range filters
    if (filters?.dateFrom) {
      filtered = filtered?.filter(
        (marathon) => new Date(marathon.date) >= new Date(filters.dateFrom)
      );
    }

    if (filters?.dateTo) {
      filtered = filtered?.filter(
        (marathon) => new Date(marathon.date) <= new Date(filters.dateTo)
      );
    }

    // Sort
    filtered?.sort((a, b) => {
      switch (sortBy) {
        case "oldest":
          return new Date(a.createdAt) - new Date(b.createdAt);
        case "deadline":
          return (
            new Date(a.registrationDeadline) - new Date(b.registrationDeadline)
          );
        case "date":
          return new Date(a.date) - new Date(b.date);
        case "price-low":
          return a?.price - b?.price;
        case "price-high":
          return b?.price - a?.price;
        default: // newest
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });

    setFilteredMarathons(filtered);
  }, [marathons, searchQuery, sortBy, filters]);

  // Update URL params
  useEffect(() => {
    const params = new URLSearchParams();

    if (searchQuery) params?.set("search", searchQuery);
    if (sortBy !== "newest") params?.set("sort", sortBy);

    Object.entries(filters)?.forEach(([key, value]) => {
      if (value && value !== "all") {
        params?.set(key, value);
      }
    });

    setSearchParams(params);
  }, [searchQuery, sortBy, filters, setSearchParams]);

  // Event handlers
  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleSort = (sortOption) => {
    setSortBy(sortOption);
    setCurrentPage(1);
  };

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleRegister = (marathon) => {
    if (!user) {
      navigate("/user-authentication", {
        state: {
          returnTo: `/marathon-registration?id=${marathon?.id}`,
          message: "Please sign in to register for this marathon",
        },
      });
      return;
    }

    navigate(`/marathon-registration?id=${marathon?.id}`);
  };

  const handleLoadMore = async () => {
    setIsLoadingMore(true);

    // Simulate loading more data
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setCurrentPage((prev) => prev + 1);
    setIsLoadingMore(false);

    // For demo purposes, we'll just set hasMore to false after first load
    if (currentPage >= 2) {
      setHasMore(false);
    }
  };

  const handleAuthStateChange = (userData) => {
    setUser(userData);
  };

  // Calculate stats
  const stats = {
    totalMarathons: marathons?.length,
    upcomingMarathons: marathons?.filter((m) => new Date(m.date) > new Date())
      ?.length,
    openRegistrations: marathons?.filter(
      (m) => new Date(m.registrationDeadline) > new Date()
    )?.length,
    totalParticipants: marathons?.reduce(
      (sum, m) => sum + m?.registrationCount,
      0
    ),
  };

  // Get paginated marathons
  const itemsPerPage = 9;
  const paginatedMarathons = filteredMarathons?.slice(
    0,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                All Marathons
              </h1>
              <p className="text-muted-foreground">
                Discover and register for marathon events worldwide
              </p>
            </div>

            {user?.isOrganizer && (
              <Button
                onClick={() => navigate("/add-marathon-event")}
                iconName="Plus"
                iconPosition="left">
                Add Marathon
              </Button>
            )}
          </div>

          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <button
              onClick={() => navigate("/")}
              className="hover:text-foreground transition-athletic">
              Home
            </button>
            <Icon name="ChevronRight" size={14} />
            <span className="text-foreground">All Marathons</span>
          </nav>
        </div>

        {/* Stats */}
        <MarathonStats
          totalMarathons={stats?.totalMarathons}
          upcomingMarathons={stats?.upcomingMarathons}
          openRegistrations={stats?.openRegistrations}
          totalParticipants={stats?.totalParticipants}
          className="mb-8"
        />

        {/* Featured Marathons */}
        <FeaturedMarathons
          featuredMarathons={featuredMarathons}
          onRegister={handleRegister}
          className="mb-8"
        />

        {/* Filters
        <MarathonFilters
          onSearch={handleSearch}
          onSort={handleSort}
          onFilter={handleFilter}
          searchQuery={searchQuery}
          sortBy={sortBy}
          filters={filters}
          isLoading={isLoading}
          className="mb-8"
        /> */}

        {/* Marathon Grid */}
        <MarathonGrid
          marathons={paginatedMarathons}
          isLoading={isLoading || isLoadingMore}
          hasMore={
            hasMore && paginatedMarathons?.length < filteredMarathons?.length
          }
          onLoadMore={handleLoadMore}
          onRegister={handleRegister}
          viewMode={viewMode}
        />
      </main>
    </div>
  );
};

export default AllMarathons;
