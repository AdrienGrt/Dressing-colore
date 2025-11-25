# Configuration SumUp

## Variables d'environnement requises

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes:

\`\`\`env
SUMUP_ACCESS_TOKEN=votre_token_api_sumup
SUMUP_MERCHANT_EMAIL=votre_email_marchand@example.com
NEXT_PUBLIC_BASE_URL=http://localhost:3000
\`\`\`

## Obtenir vos identifiants SumUp

1. Créez un compte marchand sur [SumUp](https://www.sumup.com)
2. Accédez au [Developer Portal](https://developer.sumup.com)
3. Créez une application pour obtenir vos identifiants
4. Générez un token d'accès permanent via l'API OAuth

## Test en développement

En développement, utilisez les identifiants de test fournis par SumUp pour éviter les transactions réelles.

## Production

Avant de déployer:
1. Remplacez les identifiants de test par vos identifiants de production
2. Mettez à jour `NEXT_PUBLIC_BASE_URL` avec votre domaine réel
3. Testez le flux de paiement complet
4. Vérifiez que les webhooks SumUp sont correctement configurés (optionnel)

## Support

Pour toute question concernant l'intégration SumUp, consultez la [documentation officielle](https://developer.sumup.com/docs/).
