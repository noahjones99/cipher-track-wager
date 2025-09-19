# Vercel Deployment Guide for Cipher Track Wager

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Ensure your code is pushed to GitHub
3. **Environment Variables**: Prepare the required environment variables

## Step-by-Step Deployment

### Step 1: Connect GitHub Repository

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"New Project"**
3. Click **"Import Git Repository"**
4. Select **"GitHub"** as your Git provider
5. Find and select **"cipher-track-wager"** repository
6. Click **"Import"**

### Step 2: Configure Project Settings

1. **Project Name**: `cipher-track-wager` (or your preferred name)
2. **Framework Preset**: Select **"Vite"**
3. **Root Directory**: Leave as default (`.`)
4. **Build Command**: `npm run build`
5. **Output Directory**: `dist`
6. **Install Command**: `npm install`

### Step 3: Set Environment Variables

In the **Environment Variables** section, add the following variables:

```env
# Chain Configuration
VITE_CHAIN_ID=11155111
VITE_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY

# Wallet Connect Configuration
VITE_WALLET_CONNECT_PROJECT_ID=YOUR_WALLETCONNECT_PROJECT_ID

# Infura Configuration (Optional)
VITE_INFURA_API_KEY=YOUR_INFURA_API_KEY
VITE_RPC_URL=https://1rpc.io/sepolia

# Contract Addresses (Update after deployment)
VITE_CONTRACT_ADDRESS=0x0000000000000000000000000000000000000000
```

**To add environment variables:**
1. Click **"Environment Variables"** tab
2. Click **"Add"** for each variable
3. Enter the **Name** and **Value**
4. Select **"Production"**, **"Preview"**, and **"Development"** for all variables
5. Click **"Save"**

### Step 4: Deploy

1. Click **"Deploy"** button
2. Wait for the build process to complete (usually 2-3 minutes)
3. Your app will be available at the provided Vercel URL

### Step 5: Custom Domain (Optional)

1. Go to **Project Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter your custom domain
4. Follow the DNS configuration instructions
5. Wait for DNS propagation (up to 24 hours)

## Post-Deployment Configuration

### Update Contract Address

After deploying your smart contract:

1. Go to **Project Settings** → **Environment Variables**
2. Update `VITE_CONTRACT_ADDRESS` with your deployed contract address
3. Redeploy the application

### Verify Deployment

1. Visit your Vercel URL
2. Test wallet connection
3. Verify all features are working
4. Check console for any errors

## Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check that all dependencies are in `package.json`
   - Ensure environment variables are set correctly
   - Check build logs in Vercel dashboard

2. **Wallet Connection Issues**:
   - Verify `VITE_WALLET_CONNECT_PROJECT_ID` is correct
   - Check that the project ID is valid in WalletConnect dashboard

3. **Contract Interaction Issues**:
   - Ensure `VITE_CONTRACT_ADDRESS` is set correctly
   - Verify the contract is deployed on the correct network
   - Check that the contract ABI matches the deployed contract

### Environment Variables Checklist

- [ ] `VITE_CHAIN_ID` - Set to 11155111 for Sepolia
- [ ] `VITE_RPC_URL` - Valid RPC endpoint
- [ ] `VITE_WALLET_CONNECT_PROJECT_ID` - Valid WalletConnect project ID
- [ ] `VITE_INFURA_API_KEY` - Valid Infura API key
- [ ] `VITE_CONTRACT_ADDRESS` - Deployed contract address

### Performance Optimization

1. **Enable Vercel Analytics**:
   - Go to **Project Settings** → **Analytics**
   - Enable **"Vercel Analytics"**

2. **Configure Caching**:
   - Add `vercel.json` for custom caching rules
   - Optimize images and assets

3. **Monitor Performance**:
   - Use Vercel's built-in performance monitoring
   - Check Core Web Vitals

## Security Considerations

1. **Environment Variables**: Never commit sensitive keys to Git
2. **API Keys**: Use Vercel's environment variables for all secrets
3. **CORS**: Configure CORS settings if needed
4. **HTTPS**: Vercel automatically provides HTTPS

## Monitoring and Maintenance

1. **Deployment Logs**: Monitor deployment logs for errors
2. **Performance**: Use Vercel Analytics to monitor performance
3. **Updates**: Push changes to trigger automatic deployments
4. **Rollbacks**: Use Vercel's rollback feature if needed

## Support

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Vercel Community**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
- **Project Issues**: Create issues in the GitHub repository

## Additional Resources

- [Vercel CLI](https://vercel.com/docs/functions) for local development
- [Vercel Functions](https://vercel.com/docs/functions) for serverless functions
- [Vercel Edge Functions](https://vercel.com/docs/edge-functions) for edge computing