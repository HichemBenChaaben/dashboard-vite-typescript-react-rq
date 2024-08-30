import { QueryClient } from "@tanstack/react-query";

/**
 * a single instance of query client for
 * instanciation and invalidate queries
 */
const queryClient = new QueryClient();

export default queryClient;
