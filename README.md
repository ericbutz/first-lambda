Tutorial: https://www.youtube.com/watch?v=BRRxQbSb9bo

Deploy everything:
`serverless deploy --stage dev --aws-profile <aws-profile>`

Deploy function only:
`serverless deploy --stage dev --aws-profile <aws-profile> -f firstlambda`

Call the function:
`serverless invoke --stage dev --aws-profile <aws-profile> -f firstlambda`

AWS profiles:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html