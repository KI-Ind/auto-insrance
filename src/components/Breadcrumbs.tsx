import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav
      className="bg-gray-50 dark:bg-gray-800/50 py-2 px-4 sm:px-6 lg:px-8"
      aria-label="Breadcrumb"
    >
      <div className="max-w-7xl mx-auto">
        <ol
          className="flex items-center space-x-2 text-sm"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <Link
              to="/"
              className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
              itemProp="item"
            >
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;

            return (
              <li
                key={name}
                className="flex items-center"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <ChevronRight className="h-4 w-4 text-gray-400" />
                {isLast ? (
                  <span
                    className="ml-2 text-gray-700 dark:text-gray-300"
                    itemProp="name"
                  >
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="ml-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                    itemProp="item"
                  >
                    <span itemProp="name">
                      {name.charAt(0).toUpperCase() + name.slice(1)}
                    </span>
                  </Link>
                )}
                <meta itemProp="position" content={`${index + 2}`} />
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;