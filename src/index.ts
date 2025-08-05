import 'dotenv/config';
import { logger } from './utils/logger';
import { config } from './config/config';

/**
 * Main application entry point
 */
async function main(): Promise<void> {
  try {
    logger.info('Starting AI Project...', {
      environment: config.NODE_ENV,
      version: '1.0.0',
    });

    // Your application logic will go here
    logger.info('AI Project started successfully');
  } catch (error) {
    logger.error('Failed to start AI Project', error);
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  logger.info('SIGINT received, shutting down gracefully');
  process.exit(0);
});

// Start the application
void main();
